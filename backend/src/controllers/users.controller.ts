import { Request, Response } from 'express'
import validator from 'validator'
import { Users } from '../models/Users'
import { Vehicle } from '../models/Vehicle'

export class UserController {
	static async createUser(req: Request, res: Response) {
		const { firstName, lastName, email, phone, pass } = req.body
		if (!validator.isEmail(email)) {
			return res.status(400).json({ message: 'Invalid Email' })
		}
		try {
			const mail = await Users.findOne({ where: { email } })
			const userByPhone = await Users.findOne({ where: { phone } })

			if (mail || userByPhone) {
				return res.status(500).json('Email o phone existente ')
			} else {
				const newUser = await Users.create({
					firstName,
					lastName,
					email,
					phone,
					pass,
				})
				return res.status(201).json(newUser)
			}
		} catch (error) {
			console.error(error)
			return res.status(500).json({ error: 'Error al crear el usuario' })
		}
	}

	static async getAllUsers(req: Request, res: Response) {
		try {
			const users = await Users.findAll({
				include: [{ model: Vehicle, as: 'vehicle' }],
			})
			return res.status(200).json(users)
		} catch (error) {
			console.error(error)
			return res.status(500).json({ error: 'Error al obtener usuarios' })
		}
	}

	static async deleteUserById(req: Request, res: Response) {
		const { id } = req.params
		if (!validator.isUUID(id)) {
			return res.status(400).json({ message: 'Invalid ID' })
		}
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
			return res.status(500).json({ error: 'Error when deleting user' })
		}
	}

	static async userUpdate(req: Request, res: Response) {
		const { id } = req.params
		if (!validator.isUUID(id)) {
			return res.status(400).json({ message: 'Invalid ID' })
		}
		const { firstName, lastName, email, phone, pass } = req.body

		const userToUpdate = await Users.findByPk(id)
		try {
			if (!userToUpdate) {
				throw new Error(`User with id ${id} not found`)
			} else {
				await userToUpdate.update({ firstName, lastName, email, phone, pass })

				return res.status(200).json(userToUpdate)
			}
		} catch (error) {
			return res.status(400).json({ error: 'user does not exist' })
		}
	}

	static async findUserById(req: Request, res: Response) {
		try {
			const { id } = req.params
			if (!validator.isUUID(id)) {
				return res.status(400).json({ message: 'Invalid ID' })
			}
			const findUser = await Users.findByPk(id, {
				include: [{ model: Vehicle, as: 'vehicle' }],
			})
			return res.status(200).json(findUser)
		} catch (error) {
			return res.status(400).json({ error: 'user does not exist' })
		}
	}
}
