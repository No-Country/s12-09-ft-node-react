import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({
	timestamps: false,
	tableName: 'appointment',
})

export class Appointments extends Model {
	@Column({
		type: DataType.INTEGER, // Indicamos el tipo de dato (SQL)
		primaryKey: true, // Indicamos que es la clave primaria
		autoIncrement: true, // Indicamos que se autoincrementa
	})
	id!: number // Declaramos el tipo de la propiedad (TYPESCRIPT)

	@Column({
		type: DataType.DATEONLY,
		allowNull: false,
	})
	date!: Date

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	menssage!: string
}
