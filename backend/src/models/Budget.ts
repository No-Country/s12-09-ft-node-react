import {
	BelongsToMany,
	Column,
	DataType,
	Model,
	Table,
} from 'sequelize-typescript'

import { Service } from './Services'

@Table({
	timestamps: false,
	tableName: 'budget',
})
export class Budget extends Model {
	@Column({
		primaryKey: true,
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		allowNull: false,
	})
	id!: string
	//no estoy seguro de que sea una relación de muchos a muchos por que un servicio debería tener una única cotización
	@BelongsToMany(() => Service, 'budgetService', 'budgetId', 'serviceId')
	services!: Service[]

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	description!: string

	@Column({
		type: DataType.DECIMAL(10, 2),
		allowNull: false,
		defaultValue: 0,
	})
	cost!: number

	@Column({
		type: DataType.ENUM,
		values: ['Aceptar', 'Rechazar'],
		allowNull: false,
		defaultValue: 'Rechazar',
	})
	state!: string
}
