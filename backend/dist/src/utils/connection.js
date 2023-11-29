"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./config");
const Appointments_1 = require("../models/Appointments");
const Users_1 = require("../models/Users");
const sequelize = new sequelize_typescript_1.Sequelize(config_1.DATABASE_URL, {
    dialect: 'postgres',
});
sequelize.addModels([Appointments_1.Appointments, Users_1.Users]);
exports.default = sequelize;
