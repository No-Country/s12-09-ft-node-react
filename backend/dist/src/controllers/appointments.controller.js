"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentController = void 0;
const Appointments_1 = require("../models/Appointments");
// Definimos el controlador Appointment
class AppointmentController {
    // Definimos el método para crear una cita
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Obtenemos los datos de la cita desde el cuerpo de la petición
                const { date, menssage } = req.body;
                // Creamos la cita usando el método create del modelo Appointment
                const appointment = yield Appointments_1.Appointments.create({
                    date,
                    menssage
                });
                // Enviamos la cita creada como respuesta con el código 201 (Created)
                res.status(201).json(appointment);
            }
            catch (error) {
                // Si ocurre un error, lo enviamos como respuesta con el código 500 (Internal Server Error)
                res.status(500).json(error);
            }
        });
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Obtenemos los datos de la cita desde el cuerpo de la petición
                // Creamos la cita usando el método create del modelo Appointment
                const appointment = yield Appointments_1.Appointments.findAll();
                // Enviamos la cita creada como respuesta con el código 201 (Created)
                res.status(201).json(appointment);
            }
            catch (error) {
                // Si ocurre un error, lo enviamos como respuesta con el código 500 (Internal Server Error)
                res.status(500).json(error);
            }
        });
    }
}
exports.AppointmentController = AppointmentController;
