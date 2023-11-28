"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const appointments_controller_1 = require("../controllers/appointments.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', appointments_controller_1.AppointmentController.getAll);
router.post('/', appointments_controller_1.AppointmentController.create);
