"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Score_Controller_1 = __importDefault(require("../controller/Score.Controller"));
const scoreRouter = (0, express_1.Router)();
scoreRouter.post('/', (req, res, next) => new Score_Controller_1.default(req, res, next).create());
scoreRouter.get('/', (req, res, next) => new Score_Controller_1.default(req, res, next).readAll());
scoreRouter.get('/:name', (req, res, next) => new Score_Controller_1.default(req, res, next).read());
exports.default = scoreRouter;
//# sourceMappingURL=score.router.js.map