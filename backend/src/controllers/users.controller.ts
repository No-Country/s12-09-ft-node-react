import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { RepairLog } from '../models/RepairLog'
import { Users } from '../models/Users'
import { Vehicle } from '../models/Vehicle'
import { codePassSchema, userSchema, uuidSchema } from '../utils/zodSchemas'

export class UserController {
	static async createUser(req: Request, res: Response, next: NextFunction) {
		const { email, phone, document } = req.body
		try {
			userSchema.parse(req.body)
			const mail = await Users.findOne({ where: { email } })
			const userByPhone = await Users.findOne({ where: { phone } })
			const userByDocument = await Users.findOne({ where: { document } })

			if (mail || userByPhone || userByDocument) {
				// return res
				// 	.status(400)
				// 	.json(`${mail || userByPhone || userByDocument} existente `)
				return res.status(400).json({
					existente: {
						email: mail ? mail.email : undefined,
						phone: userByPhone ? userByPhone.phone : undefined,
						document: userByDocument ? userByDocument.document : undefined,
					},
				})
			} else {
				const newUser = await Users.create({ ...req.body })
				return res.status(201).json(newUser)
			}
		} catch (error) {
			console.error(error)
			next(error)
		}
	}

	static async getAllUsers(req: Request, res: Response, next: NextFunction) {
		try {
			const users = await Users.findAll({
				include: [{ model: Vehicle, as: 'vehicle', include: [RepairLog] }],
			})
			return res.status(200).json(users)
		} catch (error) {
			console.error(error)
			next(error)
		}
	}

	static async deleteUserById(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params
		uuidSchema.parse(id)
		try {
			const userToDestroy = await Users.findByPk(id)
			if (!userToDestroy) {
				return res.status(404).json({ error: 'User not found' })
			}
			await userToDestroy.destroy()
			const remainingUsers = await Users.findAll()
			return res.status(200).json(remainingUsers)
		} catch (error) {
			console.error(error)
			next(error)
		}
	}

	static async userUpdate(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params
		uuidSchema.parse(id)
		const { firstName, lastName, email, phone, pass, document } = req.body

		const userToUpdate = await Users.findByPk(id)
		try {
			if (!userToUpdate) {
				throw new Error(`User with id ${id} not found`)
			} else {
				await userToUpdate.update({
					firstName,
					lastName,
					email,
					phone,
					pass,
					document,
				})

				return res.status(200).json(userToUpdate)
			}
		} catch (error) {
			next(error)
		}
	}

	static async findUserById(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)
			const findUser = await Users.findByPk(id, {
				include: [{ model: Vehicle, as: 'vehicle', include: [RepairLog] }],
			})
			return res.status(200).json(findUser)
		} catch (error) {
			next(error)
		}
	}
	static async login(req: Request, res: Response, next: NextFunction) {
		try {
			const { codePass } = req.body
			codePassSchema.parse(codePass)

			const result = await Users.findOne({
				where: { document: codePass },
				include: [
					{
						model: Vehicle,
						as: 'vehicle',
						include: [{ model: RepairLog, as: 'repairLog' }],
					},
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
