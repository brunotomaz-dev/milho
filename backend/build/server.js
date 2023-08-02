"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const connection_1 = __importDefault(require("./database/config/connection"));
const APP_PORT = process.env.PORT;
new app_1.default(connection_1.default).start(APP_PORT);
//# sourceMappingURL=server.js.map