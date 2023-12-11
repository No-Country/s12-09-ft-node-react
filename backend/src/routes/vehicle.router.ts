import { Router } from 'express'
import { VehicleController } from '../controllers/vehicle.controller'

const router = Router()

router.get('/', VehicleController.getVehicles)
router.get('/:id', VehicleController.getVehicleById)
router.post('/', VehicleController.createVehicle)
router.put('/:id', VehicleController.updateVehicle)
router.delete('/:id', VehicleController.deleteVehicle)

export { router }
