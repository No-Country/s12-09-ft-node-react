import express from 'express'
import { VehicleController } from '../controllers/vehicle.controller'

const router = express.Router()

router.get('/', VehicleController.getVehicles)
router.get('/:id', VehicleController.getVehicleById)
router.post('/', VehicleController.createVehicle)
router.put('/:id', VehicleController.updateVehicle)
router.delete('/:id', VehicleController.deleteVehicle)

export default router
