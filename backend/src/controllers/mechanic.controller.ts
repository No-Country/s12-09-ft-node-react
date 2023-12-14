import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { Mechanic } from '../models/Mechanic'
import { RepairLog } from '../models/RepairLog'
import { Vehicle } from '../models/Vehicle'
import { codePassSchema, mechanicSchema, uuidSchema } from '../utils/zodSchemas'

export class mechanicController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const results = await Mechanic.findAll({
				include: [
					{ model: RepairLog, as: 'repairlogs', include: [Vehicle] },
					{ model: Vehicle },
				],
			})
			res.status(200).json(results)
		} catch (error) {
			next(error)
		}
	}
	static async create(req: Request, res: Response, next: NextFunction) {
		try {
			// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
			const { role, ...rest } = req.body //Elimino la propiedad rol para que no se pueda asignar otro rol
			mechanicSchema.parse(rest)
			const result = await Mechanic.create(rest)
			res.status(201).json(result)
		} catch (error) {
			next(error)
		}
	}
	static async getOne(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)
			const result = await Mechanic.findByPk(id, {
				include: [
					{ model: RepairLog, as: 'repairlogs', include: [Vehicle] },
					{ model: Vehicle },
				],
			})
			if (!result) {
				throw new Error('Mechanic not found')
			}
			res.status(200).json(result)
		} catch (error) {
			next(error)
		}
	}
	static async update(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
			const { role, ...rest } = req.body //Elimino la propiedad rol para que no se pueda asignar otro rol
			uuidSchema.parse(id)
			const result = await Mechanic.update(rest, {
				where: { id },
				returning: true,
			})
			if (result[0] === 0) {
				throw new Error('Mechanic not found')
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
			const result = await Mechanic.destroy({ where: { id } })
			if (!result) {
				throw new Error('Mechanic not found')
			}
			res.status(200).json({ message: 'Mechanic deleted' })
		} catch (error) {
			next(error)
		}
	}
	static async login(req: Request, res: Response, next: NextFunction) {
		try {
			const { codePass } = req.body
			codePassSchema.parse(codePass)

			const result = await Mechanic.findOne({
				where: { document: codePass },
				include: [
					{ model: RepairLog, as: 'repairlogs', include: [Vehicle] },
					{ model: Vehicle },
				],
			})
			if (!result) {
				throw new Error('Invalid credentials')
			}
			const token = jwt.sign({ result }, process.env.TOKEN_SECRET as string, {
				expiresIn: '1day',
			})
			res.status(200).json({ result, token })
		} catch (error) {
			next(error)
		}
	}
}
