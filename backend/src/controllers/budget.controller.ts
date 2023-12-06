import { Request, Response } from 'express'
import { Budget } from '../models/Budget'
import { Service } from '../models/Services'

export class BudgetController {
	static async getAllBudget(req: Request, res: Response) {
		try {
			const budgets = await Budget.findAll({
				include: [{ model: Service, as: 'services' }],
			})
			return res.status(200).json(budgets)
		} catch (error) {
			console.error(error)
			return res
				.status(500)
				.json({ error: 'Error al obtener los presupuestos' })
		}
	}

	static async createBudget(req: Request, res: Response) {
		const { description, cost, state, serviceIds } = req.body

		try {
			const newBudget = await Budget.create({
				description,
				state,
			})

			// Asocia los servicios al presupuesto
			if (serviceIds && serviceIds.length > 0) {
				const services = await Service.findAll({
					where: {
						id: serviceIds,
					},
				})

				// Calcula el costo total de los servicios
				const totalCost = services.reduce(
					(acc, service) => acc + Number(service.cost),
					0,
				)

				// Asigna los servicios al presupuesto
				await newBudget.$add('services', services)

				// Actualiza el costo del presupuesto con el costo total de los servicios
				newBudget.cost = totalCost
				await newBudget.save()
			}

			res.status(201).json(newBudget)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error: 'Internal Server Error' })
		}
	}

	static async deleteBudgetById(req: Request, res: Response) {
		const { id } = req.params
		if (!id) {
			return res.status(400).json({ message: 'Invalid ID' })
		}
		try {
			const budgetToDestroy = await Budget.findByPk(id)
			if (!budgetToDestroy) {
				return res.status(404).json({ error: 'Budget not found' })
			}
			await budgetToDestroy.destroy()
			const remainingBudgets = await Budget.findAll()
			return res.status(200).json(remainingBudgets)
		} catch (error) {
			console.error(error)
			return res.status(500).json({ error: 'Error when deleting user' })
		}
	}

	static async findBudgetById(req: Request, res: Response) {
		try {
			const { id } = req.params
			if (!id) {
				return res.status(400).json({ message: 'Invalid ID' })
			}
			const budgetToFind = await Budget.findByPk(id, {
				include: [{ model: Service, as: 'services' }],
			})

			return res.status(200).json(budgetToFind)
		} catch (error) {
			console.error(error)
			return res.status(500).json({ error: 'budget does not exist' })
		}
	}

	static async budgetUpdate(req: Request, res: Response) {
		const { id } = req.params
		const { description, state, serviceIds } = req.body

		try {
			const budgetToUpdate = await Budget.findByPk(id, {
				include: [{ model: Service, as: 'services' }],
			})

			if (!budgetToUpdate) {
				return res.status(404).json({ error: `Budget with id ${id} not found` })
			}

			// Eliminar servicios existentes que no están en la lista de serviceIds
			const servicesToRemove = budgetToUpdate.services.filter(
				(service) => !serviceIds.includes(service.id),
			)
			await budgetToUpdate.$remove('services', servicesToRemove)
			// Agregar nuevos servicios
			if (serviceIds && serviceIds.length > 0) {
				const servicesToAdd = await Service.findAll({
					where: { id: serviceIds },
				})
				await budgetToUpdate.$add('services', servicesToAdd)
			}

			// Actualizar otros campos del presupuesto
			budgetToUpdate.description = description
			budgetToUpdate.state = state

			// Guardar los cambios
			await budgetToUpdate.save()

			return res.status(200).json(budgetToUpdate)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error: 'Internal Server Error' })
		}
	}
}
