import bcrypt from 'bcrypt'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { Workshop } from '../models/Workshops'
import {
	uuidSchema,
	workshopLoginSchema,
	workshopSchema,
} from '../utils/zodSchemas'

export class workshopsController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const results = await Workshop.findAll()
			res.status(200).json(results)
		} catch (error) {
			next(error)
		}
	}
	static async create(req: Request, res: Response, next: NextFunction) {
		try {
			const { password } = req.body
			workshopSchema.parse(req.body)

			const hashedPassword = await bcrypt.hash(password, 10) // salt
			const result = await Workshop.create({
				...req.body,
				password: hashedPassword,
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
			const result = await Workshop.findByPk(id)
			if (!result) {
				throw new Error('Workshop not found')
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
			const result = await Workshop.update(req.body, {
				where: { id },
				returning: true,
			})
			if (result[0] === 0) {
				throw new Error('Workshop not found')
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
			const result = await Workshop.destroy({ where: { id } })
			if (!result) {
				throw new Error('Workshop not found')
			}
			res.status(200).json({ message: 'Workshop deleted' })
		} catch (error) {
			next(error)
		}
	}
	static async login(req: Request, res: Response, next: NextFunction) {
		try {
			const { email, password } = req.body
			workshopLoginSchema.parse({ email, password })

			const result = await Workshop.findOne({ where: { email } })
			if (!result) {
				throw new Error('Invalid credentials')
			}

			const isMatch = await bcrypt.compare(password, result.password)
			if (!isMatch) {
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
