import { Sequelize } from 'sequelize-typescript'
import { Appointments } from '../models/Appointments'
import { Mechanic } from '../models/Mechanic'
import { Workshop } from '../models/Workshops'
import { DATABASE_URL } from './config'

const sequelize = new Sequelize(DATABASE_URL, {
	dialect: 'postgres',
})

sequelize.addModels([Appointments])
sequelize.addModels([Workshop])
sequelize.addModels([Mechanic])

export default sequelize
