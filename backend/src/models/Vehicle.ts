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
import { Users } from './Users'

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

	@Column({
		type: DataType.STRING,
		defaultValue:
			'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
	})
	imageUrl!: string

	@ForeignKey(() => Users)
	@Column({ type: DataType.UUID })
	userId!: string

	@BelongsTo(() => Users)
	user!: Users
}
