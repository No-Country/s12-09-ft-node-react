import {
	Table,
	Column,
	Model,
	Unique,
	ForeignKey,
	DataType,
	BelongsTo,
	AllowNull,
} from 'sequelize-typescript'
import User from './user'

@Table
export class Vehicle extends Model {
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
	brand!: string

	@AllowNull(false)
	@Column({ type: DataType.STRING })
	model!: string

	@AllowNull(false)
	@Column({ type: DataType.STRING })
	color!: string

	@AllowNull(false)
	@Column({ type: DataType.INTEGER })
	year!: number

	@Unique
	@AllowNull(false)
	@Column({
		type: DataType.STRING,
	})
	licensePlate!: string

	@AllowNull(false)
	@Column({ type: DataType.INTEGER })
	mileage!: number

	@ForeignKey(() => User)
	@Column({ type: DataType.UUID })
	userId!: string

	@BelongsTo(() => User)
	user!: User
}
