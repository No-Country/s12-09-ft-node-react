import {
	AllowNull,
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	HasMany,
	Model,
	Table,
	Unique,
} from 'sequelize-typescript'
import { Mechanic } from './Mechanic'
import { RepairLog } from './RepairLog'
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
	})
	imageUrl!: string

	@AllowNull(false)
	@ForeignKey(() => Users)
	@Column({ type: DataType.UUID })
	userId!: string

	@BelongsTo(() => Users, 'userId')
	user!: Users

	@HasMany(() => RepairLog)
	repairLog!: RepairLog[]

	@ForeignKey(() => Mechanic)
	@Column({ type: DataType.UUID })
	mechanicId!: string

	@BelongsTo(() => Mechanic)
	mechanic!: Mechanic
}
