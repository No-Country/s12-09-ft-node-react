import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { RepairLog } from './RepairLog'

@Table({
	timestamps: false,
	tableName: 'mechanic',
})
export class Mechanic extends Model {
	@Column({
		primaryKey: true,
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
	})
	id!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	firstName!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	lastName!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
	})
	email!: string

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		unique: true,
	})
	document!: number

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	phone!: string

	@Column({
		type: DataType.STRING,
		defaultValue: 'mechanic',
	})
	role!: string

	@HasMany(() => RepairLog, { as: 'repairlogs' })
	repairLogs!: RepairLog[];
}

Mechanic.prototype.toJSON = function () {
	const values = Object.assign({}, this.get())
	delete values.MechanicId
	return values
}
