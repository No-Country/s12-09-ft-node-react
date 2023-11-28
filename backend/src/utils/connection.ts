import { Sequelize } from 'sequelize-typescript'
import { DATABASE_URL } from './config'
import { Appointments } from '../models/Appointments'
import { Vehicle } from '../models/Vehicle'

const sequelize = new Sequelize(DATABASE_URL, {
	dialect: 'postgres',
})

sequelize.addModels([Appointments])
sequelize.addModels([Vehicle])

export default sequelize
