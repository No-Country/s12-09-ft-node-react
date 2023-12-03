import { Request, Response } from 'express'
import validator from 'validator'
import { Mechanic } from '../models/Mechanic'
import { RepairLog } from './../models/RepairLog'
import { Vehicle } from './../models/Vehicle'

export class RepairLogController {
	static async getAll(req: Request, res: Response) {
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
			res.status(500).json(error)
		}
	}
	static async create(req: Request, res: Response) {
		const date = new Date()
		const formattedDate = date.toLocaleDateString()
		const { vehicleId, mechanicId, state } = req.body
		const validStates = [
			'Cotizar',
			'Confirmar',
			'En reparacion',
			'Aviso al cliente',
		]
		if (!validator.isUUID(vehicleId)) {
			return res.status(400).json({ message: 'Invalid vehicleId' })
		}
		if (!validator.isUUID(mechanicId)) {
			return res.status(400).json({ message: 'Invalid mechanicId' })
		}

		if (!validStates.includes(state)) {
			return res.status(400).json({
				message: `Invalid State, must be [ ${validStates.join(', ')} ]`,
			})
		}
		try {
			const vehicle = await Vehicle.findByPk(vehicleId)
			if (!vehicle) {
				return res.status(404).json({ message: 'Vehicle not found' })
			}
			const mechanic = await Mechanic.findByPk(mechanicId)
			if (!mechanic) {
				return res.status(404).json({ message: 'Mechanic not found' })
			}
			const result = await RepairLog.create({
				...req.body,
				date: formattedDate,
			})
			res.status(201).json(result)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	static async getOne(req: Request, res: Response) {
		try {
			const { id } = req.params
			const result = await RepairLog.findByPk(id, {attributes: { exclude: ['MechanicId'] },
				include: [
					{ model: Vehicle, as: 'vehicle' },
					{ model: Mechanic, as: 'mechanic' },
				],
			})
			if (!result) {
				return res.status(404).json({ message: 'RepairLog not found' })
			}
			res.status(200).json(result)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	static async update(req: Request, res: Response) {
		const validStates = [
			'Cotizar',
			'Confirmar',
			'En reparacion',
			'Aviso al cliente',
		]
		try {
			const { id } = req.params
			if (!validStates.includes(req.body.state)) {
				return res.status(400).json({
					message: `Invalid State, must be [ ${validStates.join(', ')} ]`,
				})
			}
			const result = await RepairLog.update(req.body, {
				where: { id },
				returning: true,
			})
			if (result[0] === 0) {
				return res.status(404).json({ message: 'RepairLog not found' })
			}
			res.status(200).json(result[1][0])
		} catch (error) {
			res.status(500).json(error)
		}
	}
	static async delete(req: Request, res: Response) {
		try {
			const { id } = req.params
			const result = await RepairLog.destroy({ where: { id } })
			if (!result) {
				return res.status(404).json({ message: 'RepairLog not found' })
			}
			res.status(200).json({ message: 'RepairLog deleted' })
		} catch (error) {
			res.status(500).json(error)
		}
	}
}
