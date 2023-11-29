import { Request, Response } from 'express'
import { Users } from '../models/Users'



export class UserController {
	
	static async createUser(req: Request, res: Response) {
    const { name, lastName, email, phone, pass } = req.body;

    try {
        const mail= await Users.findOne({where:{email}});
         const userByPhone = await Users.findOne({ where: { phone } });

        if(mail || userByPhone){
            return res.status(500).json("Email o phone existente ")
        }else{      
      const newUser = await Users.create ({ name, lastName, email, phone, pass });
      return res.status(201).json(newUser);
        }
        
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al crear el usuario' });
    }
  }

    static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await Users.findAll();
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  }

  static async deleteUserById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const userToDestroy = await Users.findByPk(id);
    if (!userToDestroy) {
      return res.status(404).json({ error: 'User not found' });
    }
    await userToDestroy.destroy();
    const remainingUsers = await Users.findAll();
    return res.status(200).json(remainingUsers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error when deleting user' });
  }
}

    static async userUpdate(req: Request, res: Response) {
        const {id}= req.params;
        const {name, lastName, email, phone, pass} = req.body;

        const userToUpdate = await Users.findByPk(id);
        try{
            if (!userToUpdate) {
                throw new Error(`User with id ${id} not found`);
            }else{
            await userToUpdate.update({ name, lastName, email, phone, pass });

            return res.status(200).json(userToUpdate);
            }
        }catch(error){
            return res.status(400).json({ error: 'user does not exist' });
        }
    }

    static async findUserById(req: Request, res: Response){
        try{
            const {id}= req.params;
            const findUser= await Users.findByPk(id);
            return res.status(200).json(findUser);
        }catch(error){
            return res.status(400).json({ error: 'user does not exist' });
        }

    }
}
