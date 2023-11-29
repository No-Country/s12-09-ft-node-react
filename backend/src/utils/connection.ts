import { Sequelize } from 'sequelize-typescript'
import { DATABASE_URL } from './config'
import { Appointments } from '../models/Appointments'
import { Users } from '../models/Users'

const sequelize = new Sequelize(DATABASE_URL, {
	dialect: 'postgres',
})

sequelize.addModels([Appointments, Users])

export default sequelize
