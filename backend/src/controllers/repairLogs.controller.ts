import { NextFunction, Request, Response } from 'express'
import { Mechanic } from '../models/Mechanic'
import { repairLogSchema, stateSchema, uuidSchema } from '../utils/zodSchemas'
import { RepairLog } from './../models/RepairLog'
import { Vehicle } from './../models/Vehicle'
import { Budget } from './../models/Budget'

export class RepairLogController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const results = await RepairLog.findAll({
				attributes: { exclude: ['MechanicId'] },
				include: [
					{ model: Vehicle, as: 'vehicle' },
					{ model: Mechanic, as: 'mechanic' },
				],
			})
			res.status(200).json(results)
		} catch (error) {
			next(error)
		}
	}
	// static async create(req: Request, res: Response, next: NextFunction) {
	// 	const date = new Date()
	// 	const formattedDate = date.toLocaleDateString()
	// 	repairLogSchema.parse(req.body)
	// 	const { vehicleId, mechanicId } = req.body

	// 	try {
	// 		const vehicle = await Vehicle.findByPk(vehicleId)
	// 		if (!vehicle) {
	// 			throw new Error('Vehicle not found')
	// 		}
	// 		const mechanic = await Mechanic.findByPk(mechanicId)
	// 		if (!mechanic) {
	// 			throw new Error('Mechanic not found')
	// 		}
	// 		const result = await RepairLog.create({
	// 			...req.body,
	// 			date: formattedDate,
	// 		})
	// 		res.status(201).json(result)
	// 	} catch (error) {
	// 		next(error)
	// 	}
	// }
	/////////////////////////////////////////////////////////////////////////////
	static async create(req: Request, res: Response, next: NextFunction) {
		const date = new Date()
		const formattedDate = date.toLocaleDateString()
		repairLogSchema.parse(req.body)
		const { vehicleId, mechanicId, budgetId } = req.body

		try {
			const vehicle = await Vehicle.findByPk(vehicleId)
			if (!vehicle) {
				throw new Error('Vehicle not found')
			}
			const mechanic = await Mechanic.findByPk(mechanicId)
			if (!mechanic) {
				throw new Error('Mechanic not found')
			}

			const budget = await Budget.findByPk(budgetId)
			if (!budget) {
				throw new Error('Budget not found')
			}

			// Verificar si el presupuesto está aceptado
			if (budget.accepted) {
				// Crear el RepairLog con los datos del presupuesto
				const repairLog = await RepairLog.create({
					date: formattedDate,
					description: 'Reparaciones y Mantenimientos',
					cost: budget.costs,
					state: 'En reparacion',
					vehicleId: budget.vehicleId,
					mechanicId: budget.mechanicId,
					reparacion: budget.repair,
					mantenimiento: budget.maintenance,
				})

				// Responder con el RepairLog creado
				res.status(201).json(repairLog)
			} else {
				// Si el presupuesto no está aceptado, responder con un mensaje de error
				throw new Error('Budget not accepted')
			}
		} catch (error) {
			next(error)
		}
	}
	//////////////////////////////////////////////////////////////////////////////
	static async getOne(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			uuidSchema.parse(id)
			const result = await RepairLog.findByPk(id, {
				attributes: { exclude: ['MechanicId'] },
				include: [
					{ model: Vehicle, as: 'vehicle' },
					{ model: Mechanic, as: 'mechanic' },
				],
			})
			if (!result) {
				throw new Error('RepairLog not found')
			}
			res.status(200).json(result)
		} catch (error) {
			next(error)
		}
	}
	static async update(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			const { state } = req.body
			uuidSchema.parse(id)
			stateSchema.parse(state)
			const result = await RepairLog.update(req.body, {
				where: { id },
				returning: true,
			})
			if (result[0] === 0) {
				throw new Error('RepairLog not found')
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
			const result = await RepairLog.destroy({ where: { id } })
			if (!result) {
				throw new Error('RepairLog not found')
			}
			res.status(200).json({ message: 'RepairLog deleted' })
		} catch (error) {
			next(error)
		}
	}
}
