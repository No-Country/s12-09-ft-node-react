"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET = exports.DATABASE_URL = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = +(process.env.PORT || 3001);
exports.DATABASE_URL = process.env.DATABASE_URL; //POSTGRESQL
exports.SECRET = process.env.TOKEN_SECRET;
