"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Appointments_1 = require("../models/Appointments");
const Users_1 = require("../models/Users");
const Mechanic_1 = require("../models/Mechanic");
const Workshops_1 = require("../models/Workshops");
const config_1 = require("./config");
const Vehicle_1 = require("../models/Vehicle");
const sequelize = new sequelize_typescript_1.Sequelize(config_1.DATABASE_URL, {
    dialect: 'postgres',
});
sequelize.addModels([Users_1.Users]);
sequelize.addModels([Appointments_1.Appointments]);
sequelize.addModels([Workshops_1.Workshop]);
sequelize.addModels([Mechanic_1.Mechanic]);
sequelize.addModels([Vehicle_1.Vehicle]);
exports.default = sequelize;
