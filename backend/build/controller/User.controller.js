"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_Service_1 = __importDefault(require("../service/Auth.Service"));
const User_Service_1 = __importDefault(require("../service/User.Service"));
class UserController {
    constructor(req, res, next, userService) {
        this._userService = userService || new User_Service_1.default();
        this._authService = new Auth_Service_1.default();
        this.req = req;
        this.res = res;
        this.next = next;
    }
    async create() {
        const user = {
            name: this.req.body.name,
            email: this.req.body.email,
            password: this.req.body.password,
            role: this.req.body.role || 'user',
        };
        const token = await this._userService.create(user);
        this.res.status(201).json({ token });
    }
    async readAll() {
        const token = this.req.headers.authorization;
        const user = await this._authService.validateUser(token);
        const users = await this._userService.readAll(user.role);
        this.res.status(200).json({ users });
    }
}
exports.default = UserController;
//# sourceMappingURL=User.controller.js.map