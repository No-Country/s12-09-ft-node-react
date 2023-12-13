import { Router } from 'express'
import { RepairLogController } from '../controllers/repairLogs.controller'

const router = Router()

router.get('/', RepairLogController.getAll)
router.post('/', RepairLogController.create)
router.delete('/:id', RepairLogController.delete)
router.put('/:id', RepairLogController.update)
router.get('/:id', RepairLogController.getOne)
router.post('/notification/:id', RepairLogController.sendNotification)

export { router }
