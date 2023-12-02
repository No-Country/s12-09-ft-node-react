import { Request, Response } from 'express'
import validator from 'validator'
import { Appointments } from '../models/Appointments'

export class appointmentsController {
	static async getAll(req: Request, res: Response) {
		try {
			const results = await Appointments.findAll()
			res.status(200).json(results)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	static async create(req: Request, res: Response) {
		try {
			const result = await Appointments.create(req.body)
			res.status(201).json(result)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	static async getOne(req: Request, res: Response) {
		try {
			const { id } = req.params
			if (!validator.isUUID(id)) {
				return res.status(400).json({ message: 'Invalid ID' })
			}
			const result = await Appointments.findByPk(id)
			if (!result) {
				return res.status(404).json({ message: 'Appointment not found' })
			}
			res.status(200).json(result)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	static async update(req: Request, res: Response) {
		try {
			const { id } = req.params
			if (!validator.isUUID(id)) {
				return res.status(400).json({ message: 'Invalid ID' })
			}
			const result = await Appointments.update(req.body, {
				where: { id },
				returning: true,
			})
			if (result[0] === 0) {
				return res.status(404).json({ message: 'Appointment not found' })
			}
			res.status(200).json(result[1][0])
		} catch (error) {
			res.status(500).json(error)
		}
	}
	static async delete(req: Request, res: Response) {
		try {
			const { id } = req.params
			if (!validator.isUUID(id)) {
				return res.status(400).json({ message: 'Invalid ID' })
			}
			const result = await Appointments.destroy({ where: { id } })
			if (!result) {
				return res.status(404).json({ message: 'Appointment not found' })
			}
			res.status(200).json({ message: 'Appointment deleted' })
		} catch (error) {
			res.status(500).json(error)
		}
	}
}
