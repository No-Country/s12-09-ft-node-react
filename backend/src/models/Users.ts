import { Table,
	Column,
	Model,
	DataType,
    BeforeCreate,
    BeforeUpdate

	} from 'sequelize-typescript'

    import * as bcrypt from 'bcrypt'

@Table({
	timestamps: false,
	tableName: 'user',
})

export class Users extends Model {
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
	})
	lastName!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	name!: string
    
    @Column({
		type: DataType.STRING,
		allowNull: false,
        unique: true,
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
	})
	pass!: string

    public async comparePass(candidatePass: string): Promise<boolean> {
    return bcrypt.compare(candidatePass, this.pass);
  }

  @BeforeCreate
  @BeforeUpdate
  static async hashPass(user: Users) {
    if (user.changed('pass')) {
      const saltRounds = 10; // Número de rondas de sal (ajustable según la necesidad)
      user.pass = await bcrypt.hash(user.pass, saltRounds);
    }
  }
  
}