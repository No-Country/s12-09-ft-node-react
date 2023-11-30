/* eslint-disable @typescript-eslint/no-explicit-any */
import 'dotenv/config'
import { NextFunction, Response } from 'express'
import jwt from 'jsonwebtoken'
import { SECRET } from '../utils/config'

const verifyJWT = (req: any, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization || req.headers.Authorization
	if (typeof authHeader === 'string' && !authHeader.startsWith('Bearer '))
		return res.sendStatus(401)
	const token = authHeader?.split(' ')[1]
	jwt.verify(token, SECRET, (err: any, decoded: any) => {
		if (err) return res.sendStatus(403)
		req.user = decoded.user
		next()
	})
}
export default verifyJWT
