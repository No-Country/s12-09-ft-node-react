import { NextFunction, Request, Response } from 'express'
import { Budget } from '../models/Budget'
import { Mechanic } from '../models/Mechanic'
import { Users } from '../models/Users'
import { Vehicle } from '../models/Vehicle'

export class BudgetController {
	static async getAllBudget(req: Request, res: Response, next: NextFunction) {
		try {
			const budgets = await Budget.findAll({
				include: [
					{
						model: Users,
						attributes: { exclude: ['pass', 'rol'] },
					},
					{
						model: Vehicle,
					},
					{
						model: Mechanic,
					},
				],
				attributes: {
					exclude: ['userId', 'vehicleId', 'mechanicId', 'mechanic'],
				},
			})
			return res.status(200).json(budgets)
		} catch (error) {
			next(error)
		}
	}

	static async createBudget(req: Request, res: Response, next: NextFunction) {
		const { userId, vehicleId, mechanicId } = req.body
		try {
			const vehicle = await Vehicle.findByPk(vehicleId)
			if (!vehicle) throw new Error('Vehicle not found')
			const findMechanic = await Mechanic.findByPk(mechanicId)
			if (!findMechanic) throw new Error('Mechanic not found')
			const user = await Users.findByPk(userId)
			if (!user) throw new Error('User not found')

			const newBudget = await Budget.create({
				...req.body,
				mechanic: mechanicId,
			})
			res.status(201).json(newBudget)
		} catch (error) {
			next(error)
		}
	}
	static async budgetInfo(req: Request, res: Response, next: NextFunction) {
		const { userId } = req.body
		try {
			const user = await Users.findByPk(userId)
			if (!user) throw new Error('User not found')

			const newBudget = await Budget.findOne({
				where: { userId, isActive: true }, include:[Vehicle,Mechanic],attributes:{exclude:['mechanic','vehicleId','mechanicId']}
			})

			if (!newBudget) throw new Error('No available budget')
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
					{
						model: Vehicle,
					},
					{
						model: Mechanic,
					},
				],
				attributes: {
					exclude: ['userId', 'vehicleId', 'mechanicId', 'mechanic'],
				},
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
