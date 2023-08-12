"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const connection_1 = __importDefault(require("./database/config/connection"));
const error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
const router_1 = __importDefault(require("./routers/router"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.setConfig();
        this.app.get('/', (req, res) => res.json({ message: 'Hello World' }));
    }
    setConfig() {
        const accessControl = (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express_1.default.json());
        this.app.use(accessControl);
        this.app.use(router_1.default);
        this.app.use(error_middleware_1.default);
    }
    start(PORT) {
        (0, connection_1.default)()
            .then(() => {
            this.app.listen(PORT, '0.0.0.0', () => {
                console.log(`Server running on port ${PORT}`);
            });
        })
            .catch((err) => {
            console.error('Connection with database generated an error:\r\n');
            console.error(err);
            console.error('\r\n Exiting process... initialization failed');
            process.exit(0);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map