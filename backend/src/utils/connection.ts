import { Sequelize } from 'sequelize-typescript'
import { DATABASE_URL } from './config'
import { Appointments } from '../models/Appointments'

const sequelize = new Sequelize(DATABASE_URL, {
	dialect: 'postgres',
})

sequelize.addModels([Appointments])

export default sequelize
