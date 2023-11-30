"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Appointments_1 = require("../models/Appointments");
const Mechanic_1 = require("../models/Mechanic");
const Workshops_1 = require("../models/Workshops");
const config_1 = require("./config");
const sequelize = new sequelize_typescript_1.Sequelize(config_1.DATABASE_URL, {
    dialect: 'postgres',
});
sequelize.addModels([Appointments_1.Appointments]);
sequelize.addModels([Workshops_1.Workshop]);
sequelize.addModels([Mechanic_1.Mechanic]);
exports.default = sequelize;
