import { Request, Response } from 'express'
import { Vehicle } from '../models/Vehicle'

export class VehicleController {
	static async getVehicles(req: Request, res: Response): Promise<void> {
		try {
			const vehicles = await Vehicle.findAll()
			res.json(vehicles)
		} catch (error) {
			res.status(500).json({ error: 'Internal Server Error' })
		}
	}

	static async getVehicleById(req: Request, res: Response){
		const { id } = req.params

		try {
			const vehicle = await Vehicle.findByPk(id)
			if (!vehicle) {
				return res.status(404).json({ error: 'Vehicle not found' })
			}
			return res.json(vehicle)
		} catch (error) {
			res.status(500).json({ error: 'Internal Server Error' })
		}
	}

	static async createVehicle(req: Request, res: Response) {
		const { brand, model, color, year, licensePlate, mileage, userId } =
			req.body
		const fields = { brand, model, color, year, licensePlate, mileage }
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

	static async updateVehicle(req: Request, res: Response): Promise<void> {
		const { id } = req.params
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

	static async deleteVehicle(req: Request, res: Response): Promise<void> {
		const { id } = req.params

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
