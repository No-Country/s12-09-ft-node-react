"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointments = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Appointments = class Appointments extends sequelize_typescript_1.Model {
};
exports.Appointments = Appointments;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER, // Indicamos el tipo de dato (SQL)
        primaryKey: true, // Indicamos que es la clave primaria
        autoIncrement: true, // Indicamos que se autoincrementa
    }),
    __metadata("design:type", Number)
], Appointments.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATEONLY,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Appointments.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Appointments.prototype, "menssage", void 0);
exports.Appointments = Appointments = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'appointment',
    })
], Appointments);
