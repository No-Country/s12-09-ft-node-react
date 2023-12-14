import { Router } from 'express';
import { mechanicController } from '../controllers/mechanic.controller';

const router = Router()

router.get('/', mechanicController.getAll)
router.post('/', mechanicController.create)
router.delete('/:id', mechanicController.delete)
router.put('/:id', mechanicController.update)
router.get('/:id', mechanicController.getOne)
router.post('/login', mechanicController.login)

export {router}