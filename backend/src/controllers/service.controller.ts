import { NextFunction, Request, Response } from 'express'
import { Service } from '../models/Services'
import { servicechema, uuidSchema } from '../utils/zodSchemas'

export class ServiceController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const results = await Service.findAll()
			res.status(200).json(results)
		} catch (error) {
			next(error)
		}
	}

	static async getOne(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)
			const result = await Service.findByPk(id)
			if (!result) {
				throw new Error('Service not found')
			}
			res.status(200).json(result)
		} catch (error) {
			next(error)
		}
	}
	static async createService(req: Request, res: Response, next: NextFunction) {
		try {
			// Validar los datos del cuerpo de la solicitud con Zod
			const { name, description, quantity, cost } = servicechema.parse(req.body)

			// Crear un nuevo servicio en la base de datos
			const newService = await Service.create({
				name,
				description,
				quantity,
				cost,
			})

			res.status(201).json(newService)
		} catch (error) {
			next(error)
		}
	}
	static async update(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)
			const result = await Service.update(req.body, {
				where: { id },
				returning: true,
			})
			if (result[0] === 0) {
				throw new Error('Service not found')
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
			const result = await Service.destroy({ where: { id } })
			if (!result) {
				throw new Error('Service not found')
			}
			res.status(200).json({ message: 'Service deleted' })
		} catch (error) {
			next(error)
		}
	}
}
