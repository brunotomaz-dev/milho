"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_Service_1 = __importDefault(require("../service/Auth.Service"));
class AuthUser {
    constructor(req, res, authService) {
        this._authService = authService || new Auth_Service_1.default();
        this.req = req;
        this.res = res;
    }
    async login() {
        const { email, password } = this.req.body;
        const token = await this._authService.login(email, password);
        this.res.status(200).json({ token });
    }
    async validate() {
        const token = this.req.headers.authorization;
        const userData = await this._authService.validateUser(token);
        this.res.status(200).json({ userData });
    }
}
exports.default = AuthUser;
//# sourceMappingURL=Auth.Controller.js.map