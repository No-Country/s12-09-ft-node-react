import { z } from 'zod'
import validator from 'validator'

export const servicechema = z.object({
	name: z.string().min(1).max(255),
	description: z.string().min(1).max(1000),
	quantity: z.number().int().positive(),
	cost: z.number(),
})

export const uuidSchema = z
	.string()
	.refine(validator.isUUID, { message: 'Invalid ID' })

export const vehicleSchema = z.object({
	brand: z.string(),
	model: z.string(),
	color: z.string(),
	year: z.number(),
	licensePlate: z.string(),
	mileage: z.number(),
	userId: uuidSchema,
})
