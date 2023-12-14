import { NextFunction, Request, Response } from 'express'
import { RepairLog } from '../models/RepairLog'
import { Users } from '../models/Users'
import { Vehicle } from '../models/Vehicle'
import { uuidSchema, vehicleSchema } from '../utils/zodSchemas'

export class VehicleController {
	static async getVehicles(req: Request, res: Response, next: NextFunction) {
		try {
			const vehicles = await Vehicle.findAll({
				include: [
					{ model: Users, as: 'user' },
					{ model: RepairLog, as: 'repairLog' },
				],
			})
			res.json(vehicles)
		} catch (error) {
			next(error)
		}
	}

	static async getVehicleById(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params
		try {
			uuidSchema.parse(id)
			const vehicle = await Vehicle.findByPk(id, {
				include: [
					{ model: Users, as: 'user' },
					{ model: RepairLog, as: 'repairLog' },
				],
			})
			if (!vehicle) {
				res.status(404).json({ error: 'Vehicle not found' })
			}
			res.json(vehicle)
		} catch (error) {
			next(error)
		}
	}

	static async createVehicle(req: Request, res: Response, next: NextFunction) {
		try {
			// Validar los datos del cuerpo de la solicitud
			const data = vehicleSchema.parse(req.body)
			const defaultImg =
				'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg'
			const img = req.body.imageUrl ? req.body.imageUrl : defaultImg

			// Verificar si el usuario existe
			const user = await Users.findByPk(data.userId)
			if (!user) {
				throw new Error('User not found')
			}

			// Crear el nuevo vehículo
			const newVehicle = await Vehicle.create({ ...data, imageUrl: img })
			res.status(201).json(newVehicle)
		} catch (error) {
			next(error)
		}
	}

	static async updateVehicle(req: Request, res: Response, next: NextFunction) {
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
			if (!existingVehicle) {
				throw new Error('Vehicle not found')
			}
			await existingVehicle.update(data)
			res.json(existingVehicle)
		} catch (error) {
			next(error)
		}
	}

	static async deleteVehicle(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params
		try {
			// Validar el ID
			uuidSchema.parse(id)

			const deletedVehicleCount = await Vehicle.destroy({ where: { id } })
			if (!deletedVehicleCount) {
				throw new Error('Vehicle not found')
			}
			res.json({ message: 'Vehicle deleted successfully' })
		} catch (error) {
			next(error)
		}
	}
}
