import { Request, Response } from 'express'
import { Appointments } from '../models/Appointments'

// Definimos el controlador Appointment
export class AppointmentController {
	// Definimos el método para crear una cita
	static async create(req: Request, res: Response) {
		try {
			// Obtenemos los datos de la cita desde el cuerpo de la petición
			const { date, menssage } = req.body

			// Creamos la cita usando el método create del modelo Appointment
			const appointment = await Appointments.create({
				date,
                menssage
			})
			// Enviamos la cita creada como respuesta con el código 201 (Created)
			res.status(201).json(appointment)
		} catch (error) {
			// Si ocurre un error, lo enviamos como respuesta con el código 500 (Internal Server Error)
			res.status(500).json(error)
		}
	}

    static async getAll(req: Request, res: Response) {
		try {
			// Obtenemos los datos de la cita desde el cuerpo de la petición

			// Creamos la cita usando el método create del modelo Appointment
			const appointment = await Appointments.findAll()
			// Enviamos la cita creada como respuesta con el código 201 (Created)
			res.status(201).json(appointment)
		} catch (error) {
			// Si ocurre un error, lo enviamos como respuesta con el código 500 (Internal Server Error)
			res.status(500).json(error)
		}
	}
}
