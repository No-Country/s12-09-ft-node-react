import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({
	timestamps: false,
	tableName: 'mechanic',
})
export class Mechanic extends Model {
	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	})
	id!: number

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
	})
	document!: number

	@Column({
		type: DataType.INTEGER,
		allowNull: true,
	})
	phone!: number

	@Column({
		type: DataType.STRING,
		defaultValue: 'mechanic',
	})
	role!: string
}
