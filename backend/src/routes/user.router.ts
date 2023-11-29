import { Router } from "express";
import { UserController } from "../controllers/users.controller";

const router = Router()

router.get('/', UserController.getAllUsers)
router.post('/', UserController.createUser)
router.delete('/:id', UserController.deleteUserById)
router.put('/:id', UserController.userUpdate)
router.get('/:id', UserController.findUserById)
export { router }