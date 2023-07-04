"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NewUser_controller_1 = __importDefault(require("../controller/NewUser.controller"));
const authRouter = (0, express_1.Router)();
authRouter.post('/signup', (req, res, next) => new NewUser_controller_1.default(req, res, next).create());
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map