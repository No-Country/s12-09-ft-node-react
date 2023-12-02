import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import validator from 'validator'
import { Workshop } from '../models/Workshops'

export class workshopsController {
	static async getAll(req: Request, res: Response) {
		try {
			const results = await Workshop.findAll()
			res.status(200).json(results)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	static async create(req: Request, res: Response) {
		try {
			const { name, address, email, password } = req.body
			const fields = { name, address, email, password }
			if (!validator.isEmail(email)) {
				return res.status(400).json({ message: 'Invalid Email' })
			}

			const emptyFields = []

			for (const [key, value] of Object.entries(fields)) {
				if (!value) {
					emptyFields.push(key)
				}
			}

			if (emptyFields.length > 0) {
				return res.status(400).json({
					message: `Los campos ${emptyFields.join(', ')} son obligatorios`,
				})
			}
			const hashedPassword = await bcrypt.hash(password, 10) // salt
			const result = await Workshop.create({
				...req.body,
				password: hashedPassword,
			})
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
			const result = await Workshop.findByPk(id)
			if (!result) {
				return res.status(404).json({ message: 'Workshop not found' })
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
			const result = await Workshop.update(req.body, {
				where: { id },
				returning: true,
			})
			if (result[0] === 0) {
				return res.status(404).json({ message: 'Workshop not found' })
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
			const result = await Workshop.destroy({ where: { id } })
			if (!result) {
				return res.status(404).json({ message: 'Workshop not found' })
			}
			res.status(200).json({ message: 'Workshop deleted' })
		} catch (error) {
			res.status(500).json(error)
		}
	}
	static async login(req: Request, res: Response) {
		try {
			const { email, password } = req.body
			if (!validator.isEmail(email)) {
				return res.status(400).json({ message: 'Invalid Email' })
			}

			if (!email || !password) {
				return res.status(400).json({ message: 'All fields are required' })
			}

			const result = await Workshop.findOne({ where: { email } })
			if (!result) {
				return res.status(404).json({ message: 'Invalid credentials' })
			}
			console.log(await bcrypt.compare(password, result.password))
			const isMatch = await bcrypt.compare(password, result.password)
			if (!isMatch) {
				return res.status(400).json({ message: 'Invalid credentials' })
			}
			const token = jwt.sign({ result }, process.env.TOKEN_SECRET as string, {
				expiresIn: '1day',
			})
			res.status(200).json({ result, token })
		} catch (error) {
			console.log(error)
			res.status(500).json(error)
		}
	}
}
