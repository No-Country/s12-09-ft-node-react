// import {
// 	BelongsToMany,
// 	Column,
// 	DataType,
// 	Model,
// 	Table,
// } from 'sequelize-typescript'

// import { Service } from './Services'

// @Table({
// 	timestamps: false,
// 	tableName: 'budget',
// })
// export class Budget extends Model {
// 	@Column({
// 		primaryKey: true,
// 		type: DataType.UUID,
// 		defaultValue: DataType.UUIDV4,
// 		allowNull: false,
// 	})
// 	id!: string
// 	//no estoy seguro de que sea una relación de muchos a muchos por que un servicio debería tener una única cotización
// 	@BelongsToMany(() => Service, 'budgetService', 'budgetId', 'serviceId')
// 	services!: Service[]

// 	@Column({
// 		type: DataType.STRING,
// 		allowNull: false,
// 	})
// 	description!: string

// 	@Column({
// 		type: DataType.DECIMAL(10, 2),
// 		allowNull: false,
// 		defaultValue: 0,
// 	})
// 	cost!: number

// 	@Column({
// 		type: DataType.ENUM,
// 		values: ['Aceptar', 'Rechazar'],
// 		allowNull: false,
// 		defaultValue: 'Rechazar',
// 	})
// 	state!: string
// }

import {
	BeforeSave,
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript';
import { Users } from './Users';

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

	@ForeignKey(() => Users)
	@Column({ type: DataType.UUID })
	userId!: string

	@BelongsTo(() => Users)
	user!: Users

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
	}
}
