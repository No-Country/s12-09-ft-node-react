import { Router } from 'express'
import { ServiceController } from '../controllers/service.controller'

const router = Router()

router.get('/', ServiceController.getAll)
router.post('/', ServiceController.createService)
router.delete('/:id', ServiceController.delete)
router.put('/:id', ServiceController.update)
router.get('/:id', ServiceController.getOne)

export { router }
