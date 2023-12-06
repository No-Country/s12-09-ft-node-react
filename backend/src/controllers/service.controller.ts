import { Request, Response } from 'express'
import { z } from 'zod'
import { Service } from '../models/Services'
import { servicechema, uuidSchema } from '../utils/zodSchemas'

export class ServiceController {
	static async getAll(req: Request, res: Response) {
		try {
			const results = await Service.findAll()
			res.status(200).json(results)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	static async getOne(req: Request, res: Response) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)
			const result = await Service.findByPk(id)
			if (!result) {
				return res.status(404).json({ message: 'Service not found' })
			}
			res.status(200).json(result)
		} catch (error) {
			if (error instanceof z.ZodError) {
				res
					.status(400)
					.json({ error: 'Validation Error', details: error.errors })
			} else {
				res.status(500).json(error)
			}
		}
	}
	static async createService(req: Request, res: Response) {
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
			if (error instanceof z.ZodError) {
				// Manejar errores de validación de Zod
				res
					.status(400)
					.json({ error: 'Validation Error', details: error.errors })
			}

			console.error(error)
			res.status(500).json({ error: 'Internal Server Error' })
		}
	}
	static async update(req: Request, res: Response) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)
			const result = await Service.update(req.body, {
				where: { id },
				returning: true,
			})
			if (result[0] === 0) {
				return res.status(404).json({ message: 'Service not found' })
			}
			res.status(200).json(result[1][0])
		} catch (error) {
			if (error instanceof z.ZodError) {
				res
					.status(400)
					.json({ error: 'Validation Error', details: error.errors })
			} else {
				res.status(500).json(error)
			}
		}
	}
	static async delete(req: Request, res: Response) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)
			const result = await Service.destroy({ where: { id } })
			if (!result) {
				return res.status(404).json({ message: 'Service not found' })
			}
			res.status(200).json({ message: 'Service deleted' })
		} catch (error) {
			if (error instanceof z.ZodError) {
				res
					.status(400)
					.json({ error: 'Validation Error', details: error.errors })
			} else {
				res.status(500).json(error)
			}
		}
	}
}
