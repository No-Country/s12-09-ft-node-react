import { NextFunction, Request, Response } from 'express'
import { Appointments } from '../models/Appointments'
import { appointmentsSchema, uuidSchema } from '../utils/zodSchemas'

export class appointmentsController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const results = await Appointments.findAll()
			res.status(200).json(results)
		} catch (error) {
			next(error)
		}
	}
	static async create(req: Request, res: Response, next: NextFunction) {
		try {
			const { date } = req.body

			const dateObject = new Date(date)
			appointmentsSchema.parse({ ...req.body, date: dateObject })
			const result = await Appointments.create({
				...req.body,
				date: dateObject,
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
			const result = await Appointments.findByPk(id)
			if (!result) {
				throw new Error('Appointment not found')
			}
			res.status(200).json(result)
		} catch (error) {
			next(error)
		}
	}
	static async update(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)
			const result = await Appointments.update(req.body, {
				where: { id },
				returning: true,
			})
			if (result[0] === 0) {
				throw new Error('Appointment not found')
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
			const result = await Appointments.destroy({ where: { id } })
			if (!result) {
				throw new Error('Appointment not found')
			}
			res.status(200).json({ message: 'Appointment deleted' })
		} catch (error) {
			next(error)
		}
	}
}
