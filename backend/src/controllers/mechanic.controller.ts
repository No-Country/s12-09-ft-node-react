import { Request, Response } from 'express'
import validator from 'validator'
import { Mechanic } from '../models/Mechanic'

export class mechanicController {
	static async getAll(req: Request, res: Response) {
		try {
			const results = await Mechanic.findAll()
			res.status(200).json(results)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	static async create(req: Request, res: Response) {
		try {
			// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
			const { role, ...rest } = req.body //Elimino la propiedad rol para que no se pueda asignar otro rol
			if (!validator.isEmail(req.body.email)) {
				return res.status(400).json({ message: 'Invalid Email' })
			}
			const result = await Mechanic.create(rest)
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
			const result = await Mechanic.findByPk(id)
			if (!result) {
				return res.status(404).json({ message: 'Mechanic not found' })
			}
			res.status(200).json(result)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	static async update(req: Request, res: Response) {
		try {
			const { id } = req.params
			// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
			const { role, ...rest } = req.body //Elimino la propiedad rol para que no se pueda asignar otro rol

			if (!validator.isUUID(id)) {
				return res.status(400).json({ message: 'Invalid ID' })
			}
			const result = await Mechanic.update(rest, {
				where: { id },
				returning: true,
			})
			if (result[0] === 0) {
				return res.status(404).json({ message: 'Mechanic not found' })
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
			const result = await Mechanic.destroy({ where: { id } })
			if (!result) {
				return res.status(404).json({ message: 'Mechanic not found' })
			}
			res.status(200).json({ message: 'Mechanic deleted' })
		} catch (error) {
			res.status(500).json(error)
		}
	}
}
