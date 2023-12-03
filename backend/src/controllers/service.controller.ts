import { Request, Response } from 'express'
import { Service } from '../models/Services'
import { z } from 'zod'

// Define el esquema de validación con Zod
const serviceSchema = z.object({
	name: z.string().min(1).max(255),
	descripcion: z.string().min(1).max(1000),
	quantity: z.number().int().positive(),
	cost: z.number(),
})

export class ServiceController {
	static async createService(req: Request, res: Response) {
		try {
			// Validar los datos del cuerpo de la solicitud con Zod
			const { name, descripcion, quantity, cost } = serviceSchema.parse(
				req.body,
			)

			// Crear un nuevo servicio en la base de datos
			const newService = await Service.create({
				name,
				descripcion,
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
}
