import cors from 'cors'
import morgan from 'morgan'
import express, { Request, Response } from 'express'
import { PORT } from './src/utils/config'
import sequelize from './src/utils/connection'
import { router } from './src/routes'
// import errorHandler from './utils/errorHandler';

// Esta es nuestra aplicación
const app = express()

/* MIDDLEWARES */
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(router)
app.get('/', (req: Request, res: Response) => {
	return res.send('Welcome to express!')
})

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

// middlewares después de las rutas
// app.use(errorHandler)

export default app
