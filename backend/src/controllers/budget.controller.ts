import { NextFunction, Request, Response } from 'express'
import { Budget } from '../models/Budget'
import { Users } from '../models/Users'

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
		const { userId } = req.body
		try {
			const user = await Users.findOne({
				where: { id: userId },
				attributes: { exclude: ['pass', 'rol'] },
			})
			if (!user) throw new Error('User not found')
			const newBudget = await Budget.create(req.body)
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
		if (!id) {
			throw new Error('Budget not found')
		}
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

		try {
			const budget = await Budget.findByPk(id)
			if (budget) {
				await budget.update(req.body)
				res.json(budget)
			} else {
				throw new Error('Budget not found')
			}
		} catch (error) {
			next(error)
		}
	}
}
