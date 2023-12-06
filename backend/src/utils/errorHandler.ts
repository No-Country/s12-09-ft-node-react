import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

interface ErrorType {
	name: string
	errors?: Array<{ path: string; message: string }>
	message: string
	parent?: { detail: string }
}

const errorHandler = (
	error: ErrorType,
	_req: Request,
	res: Response,
	// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
	_next: NextFunction,
) => {
	if (error instanceof z.ZodError) {
		// Error de validación de Zod
		const errObj: { [key: string]: string } = {}
		error.errors.map((error) => {
			errObj[error.path] = error.message
		})
		return res.status(400).json(errObj)
	}
	if (
		error.message === 'Vehicle not found' ||
		error.message === 'Mechanic not found' ||
		error.message === 'RepairLog not found' ||
		error.message === 'Service not found' ||
		error.message === 'Invalid credentials' ||
		error.message === 'Workshop not found' ||
		error.message === 'Appointment not found'
	) {
		return res.status(404).json({ message: error.message })
	}
	if (error.name === 'SequelizeUniqueConstraintError') {
		return res.status(400).json({
			message: error?.errors?.[0].message,
			error: error.parent?.detail,
		})
	}
	if (error.name === 'SequelizeValidationError') {
		const errObj: { [key: string]: string } = {}
		error.errors?.map((er) => {
			errObj[er.path] = er.message
		})
		return res.status(400).json(errObj)
	}
	if (error.name === 'SequelizeEagerLoadingError') {
		return res.status(400).json({
			message: error.message,
			error: error,
		})
	}
	if (error.name === 'SequelizeForeignKeyConstraintError') {
		return res.status(400).json({
			message: error.message,
			error: error.parent?.detail,
		})
	}
	if (error.name === 'SequelizeDatabaseError') {
		return res.status(400).json({
			message: error.message,
			error,
		})
	}

	return res.status(500).json({
		message: error.message,
		error: error,
	})
}

export default errorHandler
