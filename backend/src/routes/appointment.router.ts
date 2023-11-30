import { Router } from 'express';
import { appointmentsController } from '../controllers/appointments.controller';

const router = Router()

router.get('/', appointmentsController.getAll)
router.post('/', appointmentsController.create)
router.delete('/:id', appointmentsController.delete)
router.put('/:id', appointmentsController.update)
router.get('/:id', appointmentsController.getOne)

export {router}