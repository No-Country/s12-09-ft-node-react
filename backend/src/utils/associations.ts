// associations.js
import { Mechanic } from '../models/Mechanic'
import { RepairLog } from '../models/RepairLog'

export function defineAssociations() {
	Mechanic.hasMany(RepairLog, { as: 'repairlogs' })
}
