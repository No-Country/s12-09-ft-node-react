import { RepairLog } from '../models/RepairLog'
import { Sequelize } from 'sequelize-typescript'
import { Appointments } from '../models/Appointments'
import { Mechanic } from '../models/Mechanic'
import { Users } from '../models/Users'
import { Vehicle } from '../models/Vehicle'
import { Workshop } from '../models/Workshops'
import { Service } from '../models/Services'
import { Budget } from '../models/Budget'
import { DATABASE_URL } from './config'

const sequelize = new Sequelize(DATABASE_URL, {
	dialect: 'postgres',
})

sequelize.addModels([
	RepairLog,
	Users,
	Vehicle,
	Appointments,
	Workshop,
	Mechanic,
	Service,
	Budget,
])

export default sequelize
