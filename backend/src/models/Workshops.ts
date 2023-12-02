import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({
	timestamps: false,
	tableName: 'workshop',
})
export class Workshop extends Model {
	@Column({
		primaryKey: true,
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
	})
	id!: string

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
		type: DataType.STRING,
		allowNull: true,
		unique: true,
	})
	phone!: string

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
