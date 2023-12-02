import { Request, Response } from 'express'
import validator from 'validator'
import { Users } from '../models/Users'
import { Vehicle } from '../models/Vehicle'
export class VehicleController {
	static async getVehicles(req: Request, res: Response): Promise<void> {
		try {
			const vehicles = await Vehicle.findAll({include:{model:Users, as: "user"}})
			res.json(vehicles)
		} catch (error) {
			res.status(500).json({ error: 'Internal Server Error' })
		}
	}

	static async getVehicleById(req: Request, res: Response) {
		const { id } = req.params
		if (!validator.isUUID(id)) {
			return res.status(400).json({ message: 'Invalid ID' })
		}
		try {
			const vehicle = await Vehicle.findByPk(id,{include:{model:Users, as: "user"}})
			if (!vehicle) {
				res.status(404).json({ error: 'Vehicle not found' })
			}
			res.json(vehicle)
		} catch (error) {
			res.status(500).json({ error: 'Internal Server Error' })
		}
	}

	static async createVehicle(req: Request, res: Response) {
		const { brand, model, color, year, licensePlate, mileage, userId } =
			req.body

		if (!validator.isUUID(userId)) {
			return res.status(400).json({ message: 'Invalid ID' })
		}
		const fields = { brand, model, color, year, licensePlate, mileage, userId }
		const emptyFields = []

		for (const [key, value] of Object.entries(fields)) {
			if (!value) {
				emptyFields.push(key)
			}
		}

		if (emptyFields.length > 0) {
			return res.status(400).json({
				message: `Los campos ${emptyFields.join(', ')} son obligatorios`,
			})
		}

		try {
			const user = await Users.findByPk(userId)
			if (!user) return res.status(400).json({ message: 'User not found' })
			const newVehicle = await Vehicle.create({
				brand,
				model,
				color,
				year,
				licensePlate,
				mileage,
				userId,
			})
			res.status(201).json(newVehicle)
		} catch (error) {
			res.status(500).json({ error: 'Internal Server Error' })
		}
	}

	static async updateVehicle(req: Request, res: Response) {
		const { id } = req.params
		if (!validator.isUUID(id)) {
			return res.status(400).json({ message: 'Invalid ID' })
		}
		const { brand, model, color, year, licensePlate, mileage, userId } =
			req.body

		try {
			const existingVehicle = await Vehicle.findByPk(id)
			if (existingVehicle) {
				await existingVehicle.update({
					brand,
					model,
					color,
					year,
					licensePlate,
					mileage,
					userId,
				})
				res.json(existingVehicle)
			} else {
				res.status(404).json({ error: 'Vehicle not found' })
			}
		} catch (error) {
			res.status(500).json({ error: 'Internal Server Error' })
		}
	}

	static async deleteVehicle(req: Request, res: Response) {
		const { id } = req.params
		if (!validator.isUUID(id)) {
			return res.status(400).json({ message: 'Invalid ID' })
		}

		try {
			const deletedVehicleCount = await Vehicle.destroy({ where: { id } })
			if (deletedVehicleCount > 0) {
				res.json({ message: 'Vehicle deleted successfully' })
			} else {
				res.status(404).json({ error: 'Vehicle not found' })
			}
		} catch (error) {
			res.status(500).json({ error: 'Internal Server Error' })
		}
	}
}
