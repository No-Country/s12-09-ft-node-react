import {
	AllowNull,
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { Mechanic } from './Mechanic'
import { Vehicle } from './Vehicle'

@Table({
	timestamps: false,
	tableName: 'attendance',
})
export class RepairLog extends Model {
	@Column({
		primaryKey: true,
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		allowNull: false,
	})
	id!: string

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	date!: Date

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	description!: string

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	cost!: number

	@Column({
		type: DataType.ENUM,
		values: ['Cotizar', 'Confirmar', 'En reparacion', 'Aviso al cliente'],
		allowNull: false,
		defaultValue: 'Cotizar',
	})
	state!: string

	@AllowNull(false)
	@ForeignKey(() => Vehicle)
	@Column({ type: DataType.UUID })
	vehicleId!: string

	@BelongsTo(() => Vehicle)
	vehicle!: Vehicle

	@AllowNull(false)
	@ForeignKey(() => Mechanic)
	@Column({ type: DataType.UUID })
	mechanicId!: string

	@BelongsTo(() => Mechanic)
	mechanic!: Mechanic
}

RepairLog.prototype.toJSON = function () {
	const values = Object.assign({}, this.get())
	delete values.MechanicId
	return values
}
