import cors from 'cors'
import express, { Request, Response } from 'express'
import morgan from 'morgan'
import { router } from './src/routes'

import { PORT } from './src/utils/config'
import sequelize from './src/utils/connection'
import errorHandler from './src/utils/errorHandler'

// Esta es nuestra aplicación
const app = express()

/* MIDDLEWARES */
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(router)

const main = async () => {
	try {
		await sequelize.sync()
		console.log('Successful connection to the database')

		app.listen(PORT, async () => {
			console.log(`Server listening at ${PORT}`)
		})
	} catch (error) {
		console.log(error)
	}
}
main()

app.get('/', (req: Request, res: Response) => {
	return res.send('Welcome to express!')
})

app.use(errorHandler)

export default app
