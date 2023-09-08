"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = __importDefault(require("../controller/User.controller"));
const userRouter = (0, express_1.Router)();
userRouter.post('/new', (req, res, next) => new User_controller_1.default(req, res, next).create());
userRouter.get('/', (req, res, next) => new User_controller_1.default(req, res, next).readAll());
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map