import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({
	timestamps: false,
	tableName: 'workshop',
})
export class Workshop extends Model {
	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	})
	id!: number

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
	})
	name!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
	})
	address!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
	})
	email!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
	})
	password!: string

	@Column({
		type: DataType.INTEGER,
		allowNull: true,
		unique: true,
	})
	phone!: number

	@Column({
		type: DataType.STRING,
		unique: true,
		defaultValue: 'Cars',
	})
	services!: string

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	hours!: string

	@Column({
		type: DataType.STRING,
		allowNull: true,
		defaultValue: 'admin',
	})
	role!: string
}
//Elimino la constraseña para que no la traiga en el get
Workshop.prototype.toJSON = function () {
	const values = Object.assign({}, this.get())
	delete values.password
	return values
}
