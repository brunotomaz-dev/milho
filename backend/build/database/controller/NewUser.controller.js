"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NewUser_Service_1 = __importDefault(require("../service/NewUser.Service"));
class NewUserController {
    constructor(req, res, next, newUserService) {
        this._newUserService = newUserService || new NewUser_Service_1.default();
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
        const token = await this._newUserService.create(user);
        this.res.status(201).json({ token });
    }
}
exports.default = NewUserController;
//# sourceMappingURL=NewUser.controller.js.map