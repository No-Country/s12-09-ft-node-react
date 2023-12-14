import {
	BeforeSave,
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { Mechanic } from './Mechanic'
import { RepairLog } from './RepairLog'
import { Users } from './Users'
import { Vehicle } from './Vehicle'

@Table({
	timestamps: false,
	tableName: 'budget',
})
export class Budget extends Model {
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
	})
	id!: string

	@Column({
		type: DataType.ARRAY(DataType.JSONB),
		allowNull: false,
	})
	repair!: { name: string; description: string; cost: number }[]

	@Column({
		type: DataType.ARRAY(DataType.JSONB),
		allowNull: false,
	})
	maintenance!: { task: string; description: string; cost: number }[]

	@Column({
		type: DataType.DECIMAL(10, 2),
		allowNull: false,
		defaultValue: 0,
	})
	costs!: number

	@Column({
		type: DataType.DECIMAL(10, 2),
		allowNull: false,
	})
	labor!: number

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
		defaultValue: false, // Por defecto, el presupuesto no está aceptado
	})
	accepted!: boolean

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
		defaultValue: true,
	})
	isActive!: boolean

	@ForeignKey(() => Users)
	@Column({ type: DataType.UUID })
	userId!: string

	@BelongsTo(() => Users)
	user!: Users

	@ForeignKey(() => Vehicle)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	vehicleId!: string

	@BelongsTo(() => Vehicle, { as: 'vehicleAssociation' })
	vehicle!: Vehicle

	@ForeignKey(() => Mechanic)
	@BelongsTo(() => Mechanic, { as: 'mechanicAssociation' })
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	mechanicId!: Mechanic

	@Column({
		type: DataType.UUID,
		// allowNull: false,
	})
	mechanic!: string

	@BeforeSave
	static calculateCosts(budget: Budget) {
		// Calcular la suma de los costos de reparaciones
		const reparacionCosts = budget.repair.reduce(
			(total, reparacion) => total + reparacion.cost,
			0,
		)

		// Calcular la suma de los costos de mantenimientos
		const mantenimientoCosts = budget.maintenance.reduce(
			(total, mantenimiento) => total + mantenimiento.cost,
			0,
		)

		const laborCosts = budget.labor

		// Actualizar la columna costos con la suma total
		budget.costs = reparacionCosts + mantenimientoCosts + laborCosts
		// Si el presupuesto se acepta, crea un RepairLog
		if (budget.changed('accepted') && budget.accepted) {
			budget.isActive = false
			return RepairLog.create({
				date: new Date(),
				description: 'Reparaciones y Mantenimientos',
				cost: budget.costs,
				state: 'En reparacion',
				vehicleId: budget.vehicleId,
				mechanicId: budget.mechanicId,
				repair: budget.repair,
				maintenance: budget.maintenance,
			})
		}
	}
}
