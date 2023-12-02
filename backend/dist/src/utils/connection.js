"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Appointments_1 = require("../models/Appointments");
const Mechanic_1 = require("../models/Mechanic");
const Users_1 = require("../models/Users");
const Vehicle_1 = require("../models/Vehicle");
const Workshops_1 = require("../models/Workshops");
const config_1 = require("./config");
const sequelize = new sequelize_typescript_1.Sequelize(config_1.DATABASE_URL, {
    dialect: 'postgres',
});
sequelize.addModels([Users_1.Users, Vehicle_1.Vehicle, Appointments_1.Appointments, Workshops_1.Workshop, Mechanic_1.Mechanic]);
exports.default = sequelize;
