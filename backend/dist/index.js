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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./src/utils/config");
const connection_1 = __importDefault(require("./src/utils/connection"));
const routes_1 = require("./src/routes");
// import errorHandler from './utils/errorHandler';
// Esta es nuestra aplicación
const app = (0, express_1.default)();
/* MIDDLEWARES */
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(routes_1.router);
app.get('/', (req, res) => {
    return res.send('Welcome to express!');
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        connection_1.default.sync();
        console.log('Conexión exitosa');
        app.listen(config_1.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
            console.log(`Server listening at ${config_1.PORT}`);
        }));
    }
    catch (error) {
        console.log(error);
    }
});
main();
// middlewares después de las rutas
// app.use(errorHandler)
exports.default = app;
