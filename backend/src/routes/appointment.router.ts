import { Router } from "express";
import { AppointmentController } from "../controllers/appointments.controller";

const router = Router()

router.get('/', AppointmentController.getAll)
router.post('/', AppointmentController.create)

export { router }