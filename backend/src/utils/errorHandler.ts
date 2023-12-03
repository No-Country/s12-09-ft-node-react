import { NextFunction, Request, Response } from 'express'

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
	_next: NextFunction,
) => {
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
