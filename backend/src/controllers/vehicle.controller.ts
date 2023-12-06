import { Request, Response } from 'express'
import validator from 'validator'
import { z } from 'zod'
import { RepairLog } from '../models/RepairLog'
import { Users } from '../models/Users'
import { Vehicle } from '../models/Vehicle'
import { vehicleSchema, uuidSchema } from '../utils/zodSchemas'

export class VehicleController {
	static async getVehicles(req: Request, res: Response) {
		try {
			const vehicles = await Vehicle.findAll({
				include: [
					{ model: Users, as: 'user' },
					{ model: RepairLog, as: 'repairLog' },
				],
			})
			res.json(vehicles)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	static async getVehicleById(req: Request, res: Response) {
		const { id } = req.params
		try {
			uuidSchema.parse(id)
			const vehicle = await Vehicle.findByPk(id, {
				include: { model: Users, as: 'user' },
			})
			if (!vehicle) {
				res.status(404).json({ error: 'Vehicle not found' })
			}
			res.json(vehicle)
		} catch (error) {
			if (error instanceof z.ZodError) {
				res
					.status(400)
					.json({ message: 'Validation error', details: error.errors })
			} else {
				res.status(500).json({ error: 'Internal Server Error' })
			}
		}
	}

	static async createVehicle(req: Request, res: Response) {
		try {
			// Validar los datos del cuerpo de la solicitud
			const data = vehicleSchema.parse(req.body)

			// Verificar si el usuario existe
			const user = await Users.findByPk(data.userId)
			if (!user) {
				return res.status(400).json({ message: 'User not found' })
			}

			// Crear el nuevo vehículo
			const newVehicle = await Vehicle.create(data)
			res.status(201).json(newVehicle)
		} catch (error) {
			if (error instanceof z.ZodError) {
				// Errores de validación de Zod
				res
					.status(400)
					.json({ message: 'Validation error', details: error.errors })
			} else {
				// Otros errores
				res.status(500).json({ error: 'Internal Server Error' })
			}
		}
	}

	static async updateVehicle(req: Request, res: Response) {
		const { id } = req.params
		const { brand, model, color, year, licensePlate, mileage, userId } =
			req.body
		try {
			// Validar el ID
			uuidSchema.parse(id)

			// Validar los datos del cuerpo de la solicitud
			const data = vehicleSchema.parse({
				brand,
				model,
				color,
				year,
				licensePlate,
				mileage,
				userId,
			})

			const existingVehicle = await Vehicle.findByPk(id)
			if (existingVehicle) {
				await existingVehicle.update(data)
				res.json(existingVehicle)
			} else {
				res.status(404).json({ error: 'Vehicle not found' })
			}
		} catch (error) {
			if (error instanceof z.ZodError) {
				res
					.status(400)
					.json({ message: 'Validation error', details: error.errors })
			} else {
				res.status(500).json({ error: 'Internal Server Error' })
			}
		}
	}

	static async deleteVehicle(req: Request, res: Response) {
		const { id } = req.params
		try {
			// Validar el ID
			uuidSchema.parse(id)

			const deletedVehicleCount = await Vehicle.destroy({ where: { id } })
			if (deletedVehicleCount > 0) {
				res.json({ message: 'Vehicle deleted successfully' })
			} else {
				res.status(404).json({ error: 'Vehicle not found' })
			}
		} catch (error) {
			if (error instanceof z.ZodError) {
				res
					.status(400)
					.json({ message: 'Validation error', details: error.errors })
			} else {
				res.status(500).json({ error: 'Internal Server Error' })
			}
		}
	}
}
