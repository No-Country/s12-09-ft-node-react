import { z } from 'zod'

export const servicechema = z.object({
	name: z.string().min(2).max(255),
	description: z.string().min(1).max(1000),
	quantity: z.number().int().positive(),
	cost: z.number(),
})

export const workshopSchema = z.object({
	name: z.string().min(2, { message: 'Name too small' }),
	address: z.string().min(2, { message: 'Address too small' }),
	email: z.string().email({ message: 'Invalid email address' }),
	password: z.string().min(5, { message: 'Password too small' }),
	phone: z.string().optional(),
	role: z.string().default('admin'),
})

export const workshopLoginSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	password: z.string().min(5, { message: 'Password too small' }),
})

export const mechanicSchema = z.object({
	firstName: z.string().min(2, 'First name too small'),
	lastName: z.string().min(2, 'Last name too small'),
	email: z.string().email({ message: 'Invalid email address' }),
	document: z
		.number()
		.min(6)
		.int()
		.max(999999999)
		.positive({
			message: 'Document must be a positive integer and be 6-10 characters',
		}),
	phone: z.string().optional(),
	role: z.string().default('mechanic'),
})
export const userSchema = z.object({
	firstName: z.string().min(2, 'First name too small'),
	lastName: z.string().min(2, 'Last name too small'),
	email: z.string().email({ message: 'Invalid email address' }),
	document: z
		.number()
		.min(6)
		.int()
		.positive({
			message: 'Document must be a positive integer and be 6-10 characters',
		}),
	phone: z.string().optional(),
	role: z.string().default('user'),
})

export const codePassSchema = z
	.number()
	.min(5)
	.int()
	.positive({ message: 'AccesCode must be a positive integer' })

export const repairLogSchema = z.object({
	description: z.string().min(2, 'Description too small'),
	cost: z
		.number()
		.int()
		.positive({ message: 'Cost must be a positive integer' }),
	state: z.enum(['Cotizar', 'Confirmar', 'En reparacion', 'Aviso al cliente']),
	vehicleId: z.string().uuid(),
	mechanicId: z.string().uuid(),
	budgetId: z.string().uuid(),
})

export const appointmentsSchema = z.object({
	date: z.date(),
	menssage: z.string().min(3, { message: 'Message too small' }),
})

export const uuidSchema = z.string().uuid()

export const vehicleSchema = z.object({
	brand: z.string(),
	model: z.string(),
	color: z.string(),
	year: z.number(),
	licensePlate: z.string(),
	mileage: z.number(),
	userId: z.string().uuid(),
	imageUrl: z.string().optional(),
})

export const stateSchema = z.enum([
	'Cotizar',
	'Confirmar',
	'En reparacion',
	'Aviso al cliente',
])

export const budgetSchema = z.object({
	repair: z.array(
		z.object({
			name: z.string(),
			description: z.string(),
			cost: z.number().positive(),
		}),
	),
	maintenance: z.array(
		z.object({
			task: z.string(),
			description: z.string(),
			cost: z.number().positive(),
		}),
	),
	costs: z.number().positive().optional(),
	labor: z.number().positive(),
	accepted: z.boolean(),
	isActive: z.boolean().optional(),
	userId: z.string().uuid(),
	vehicleId: z.string().uuid(),
	mechanicId: z.string().uuid(),
})
