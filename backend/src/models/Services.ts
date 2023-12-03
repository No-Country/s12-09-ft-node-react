import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript'

@Table
export class Service extends Model {
	@Column({
		primaryKey: true,
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
	})
	id!: string

	@AllowNull(false)
	@Column({
		type: DataType.STRING,
	})
	name!: string

	@AllowNull(false)
	@Column({
		type: DataType.STRING,
	})
	descripcion!: string

	@AllowNull(false)
	@Column({
		type: DataType.INTEGER,
	})
	quantity!: number

	@AllowNull(false)
	@Column({
		type: DataType.DECIMAL(10, 2),
	})
	cost!: number
}
