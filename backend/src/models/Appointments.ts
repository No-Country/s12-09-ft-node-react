import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({
	timestamps: false,
	tableName: 'appointment',
})
export class Appointments extends Model {
	@Column({
		primaryKey: true,
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
	})
	id!: string

	@Column({
		type: DataType.DATEONLY,
		// allowNull: false,
	})
	date!: Date

	@Column({
		type: DataType.STRING,
		// allowNull: false,
	})
	menssage!: string

	// @Column({
	// 	type: DataType.JSONB,
	// 	// allowNull: false,
	// 	defaultValue: [],
	// })
	// pruebas!: object[]
}
