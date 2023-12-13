import { NextFunction, Request, Response } from 'express'
import { Mechanic } from '../models/Mechanic'
import { repairLogSchema, stateSchema, uuidSchema } from '../utils/zodSchemas'
import { RepairLog } from './../models/RepairLog'
import { Vehicle } from './../models/Vehicle'
import { Users } from '../models/Users'
import { sendEmail } from '../utils/nodemailer'

export class RepairLogController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const results = await RepairLog.findAll({
				attributes: { exclude: ['MechanicId'] },
				include: [
					{ model: Vehicle, as: 'vehicle' },
					{ model: Mechanic, as: 'mechanic' },
				],
			})
			res.status(200).json(results)
		} catch (error) {
			next(error)
		}
	}
	static async create(req: Request, res: Response, next: NextFunction) {
		const date = new Date()
		const formattedDate = date.toLocaleDateString()
		repairLogSchema.parse(req.body)
		const { vehicleId, mechanicId } = req.body

		try {
			const vehicle = await Vehicle.findByPk(vehicleId)
			if (!vehicle) {
				throw new Error('Vehicle not found')
			}
			const mechanic = await Mechanic.findByPk(mechanicId)
			if (!mechanic) {
				throw new Error('Mechanic not found')
			}
			const result = await RepairLog.create({
				...req.body,
				date: formattedDate,
			})
			res.status(201).json(result)
		} catch (error) {
			next(error)
		}
	}
	static async getOne(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)
			const result = await RepairLog.findByPk(id, {
				attributes: { exclude: ['MechanicId'] },
				include: [
					{ model: Vehicle, as: 'vehicle' },
					{ model: Mechanic, as: 'mechanic' },
				],
			})
			if (!result) {
				throw new Error('RepairLog not found')
			}
			res.status(200).json(result)
		} catch (error) {
			next(error)
		}
	}
	static async update(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			const { state } = req.body
			uuidSchema.parse(id)
			stateSchema.parse(state)
			const result = await RepairLog.update(req.body, {
				where: { id },
				returning: true,
			})
			if (result[0] === 0) {
				throw new Error('RepairLog not found')
			}
			res.status(200).json(result[1][0])
		} catch (error) {
			next(error)
		}
	}
	static async delete(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)
			const result = await RepairLog.destroy({ where: { id } })
			if (!result) {
				throw new Error('RepairLog not found')
			}
			res.status(200).json({ message: 'RepairLog deleted' })
		} catch (error) {
			next(error)
		}
	}

	static async sendNotification(
		req: Request,
		res: Response,
		next: NextFunction,
	) {
		const { id } = req.params
		uuidSchema.parse(id)

		try {
			const repairLog = await RepairLog.findByPk(id, {
				include: [
					{
						model: Vehicle,
						as: 'vehicle',
						include: [{ model: Users, as: 'user' }],
					},
				],
			})

			if (!repairLog) {
				throw new Error('RepairLog not found')
			}

			// Envía el correo al dueño del auto
			const owner = repairLog.vehicle.user
			await sendEmail(owner)

			res.status(200).json({ message: 'Notification sent to owner' })
		} catch (error) {
			next(error)
		}
	}
}
