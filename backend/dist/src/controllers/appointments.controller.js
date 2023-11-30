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
exports.appointmentsController = void 0;
const Appointments_1 = require("../models/Appointments");
class appointmentsController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield Appointments_1.Appointments.findAll();
                res.status(200).json(results);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Appointments_1.Appointments.create(req.body);
                res.status(201).json(result);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    static getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield Appointments_1.Appointments.findByPk(id);
                if (!result) {
                    return res.status(404).json({ message: 'Appointment not found' });
                }
                res.status(200).json(result);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield Appointments_1.Appointments.update(req.body, { where: { id }, returning: true });
                if (result[0] === 0) {
                    return res.status(404).json({ message: 'Appointment not found' });
                }
                res.status(200).json(result[1][0]);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield Appointments_1.Appointments.destroy({ where: { id } });
                if (!result) {
                    return res.status(404).json({ message: 'Appointment not found' });
                }
                res.status(200).json({ message: 'Appointment deleted' });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.appointmentsController = appointmentsController;
