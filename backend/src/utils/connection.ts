import { Sequelize } from 'sequelize-typescript'
import { Appointments } from '../models/Appointments'
import { Mechanic } from '../models/Mechanic'
import { Workshop } from '../models/Workshops'
import { DATABASE_URL } from './config'
import { Vehicle } from '../models/Vehicle'

const sequelize = new Sequelize(DATABASE_URL, {
	dialect: 'postgres',
})

sequelize.addModels([Appointments])
sequelize.addModels([Workshop])
sequelize.addModels([Mechanic])
sequelize.addModels([Vehicle])

export default sequelize
