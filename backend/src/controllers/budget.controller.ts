import { NextFunction, Request, Response } from 'express'
import { Budget } from '../models/Budget'
import { Users } from '../models/Users'
import { budgetSchema, uuidSchema } from '../utils/zodSchemas'

export class BudgetController {
	static async getAllBudget(req: Request, res: Response, next: NextFunction) {
		try {
			const budgets = await Budget.findAll({
				include: [
					{
						model: Users,
						attributes: { exclude: ['pass', 'rol'] },
					},
				],
			})
			return res.status(200).json(budgets)
		} catch (error) {
			next(error)
		}
	}

	static async createBudget(req: Request, res: Response, next: NextFunction) {
		try {
			// Validar todos los datos del presupuesto con Zod
			const validatedData = budgetSchema.parse(req.body)

			const { userId } = validatedData
			const user = await Users.findOne({
				where: { id: userId },
				attributes: { exclude: ['pass', 'rol'] },
			})
			if (!user) throw new Error('User not found')

			const newBudget = await Budget.create(validatedData)
			res.status(201).json(newBudget)
		} catch (error) {
			next(error)
		}
	}

	static async deleteBudgetById(
		req: Request,
		res: Response,
		next: NextFunction,
	) {
		const { id } = req.params
		uuidSchema.parse(id)

		try {
			const budgetToDestroy = await Budget.findByPk(id, {
				include: [
					{
						model: Users,
						attributes: { exclude: ['pass', 'rol'] },
					},
				],
			})
			if (!budgetToDestroy) {
				throw new Error('Budget not found')
			}
			await budgetToDestroy.destroy()
			const remainingBudgets = await Budget.findAll({
				include: [
					{
						model: Users,
						attributes: { exclude: ['pass', 'rol'] },
					},
				],
			})
			res.status(200).json(remainingBudgets)
		} catch (error) {
			next(error)
		}
	}

	static async findBudgetById(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)

			const budgetToFind = await Budget.findByPk(id, {
				include: [
					{
						model: Users,
						attributes: { exclude: ['pass', 'rol'] },
					},
				],
			})
			if (!budgetToFind) {
				throw new Error('Budget not found')
			}
			res.status(200).json(budgetToFind)
		} catch (error) {
			next(error)
		}
	}

	static async updateBudgetById(
		req: Request,
		res: Response,
		next: NextFunction,
	) {
		const { id } = req.params
		uuidSchema.parse(id)

		try {
			const budget = await Budget.findByPk(id)
			if (budget) {
				// Validar todos los datos del presupuesto con Zod
				const validatedData = budgetSchema.parse(req.body)

				await budget.update(validatedData)
				res.json(budget)
			} else {
				throw new Error('Budget not found')
			}
		} catch (error) {
			next(error)
		}
	}

	static async acceptBudget(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params
		uuidSchema.parse(id)

		try {
			// Busca el presupuesto por ID
			const budget = await Budget.findByPk(id)

			if (!budget) {
				throw new Error('Budget not found')
			}
			console.log('Data received for acceptance:', budget)
			// Actualiza el campo 'accepted' a true
			await budget.update({ accepted: true })

			// Responde con el presupuesto actualizado
			res.status(200).json(budget)
		} catch (error) {
			next(error)
		}
	}
}
