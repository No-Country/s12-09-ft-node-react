import {
	BeforeCreate,
	BeforeUpdate,
	Column,
	DataType,
	HasMany,
	Model,
	Table,
} from 'sequelize-typescript'
import { Vehicle } from './Vehicle'

import * as bcrypt from 'bcrypt'

@Table({
	timestamps: false,
	tableName: 'user',
})
export class Users extends Model {
	public static validateEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}
	@Column({
		primaryKey: true,
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		allowNull: false,
	})
	id!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
		validate: {
			isLastName(value: string) {
				if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(value)) {
					throw new Error('The last name can only contain letters and spaces')
				}
			},
		},
	})
	lastName!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
		validate: {
			isName(value: string) {
				if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(value)) {
					throw new Error('The name can only contain letters and spaces')
				}
			},
		},
	})
	firstName!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: {
				msg: 'The email format is not valid',
			},
			customValidator(value: string) {
				if (!Users.validateEmail(value)) {
					throw new Error('The email format is not valid')
				}
			},
		},
	})
	email!: string

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		unique: true,
	})
	phone!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
		defaultValue: 'user',
	})
	rol!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
		validate: {
			len: {
				args: [8, 8],
				msg: 'The password must have exactly 8 characters',
			},
			isStrongPassword(value: string) {
				if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
					throw new Error(
						'The password must contain at least one uppercase and one lowercase letter',
					)
				}
			},
		},
	})
	pass!: string

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		unique: true,
		validate: {
			len: {
				args: [8, 8],
				msg: 'The document must have exactly 8 characters',
			},
		},
	})
	document!: number

	@HasMany(() => Vehicle)
	vehicle!: Vehicle[]

	public async comparePass(candidatePass: string): Promise<boolean> {
		return bcrypt.compare(candidatePass, this.pass)
	}

	@BeforeCreate
	@BeforeUpdate
	static async hashPass(user: Users) {
		if (user.changed('pass')) {
			const saltRounds = 10 // Número de rondas de sal (ajustable según la necesidad)
			user.pass = await bcrypt.hash(user.pass, saltRounds)
		}
	}
}
//Elimino la constraseña para que no la traiga en el get
Users.prototype.toJSON = function () {
	const values = Object.assign({}, this.get())
	delete values.pass
	return values
}
