"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Questions_Controller_1 = __importDefault(require("../controller/Questions.Controller"));
const questionsRouter = (0, express_1.Router)();
questionsRouter.get('/:tier', (req, res, next) => new Questions_Controller_1.default(req, res, next).read());
questionsRouter.post('/:tier', (req, res, next) => new Questions_Controller_1.default(req, res, next).addQuestion());
exports.default = questionsRouter;
//# sourceMappingURL=question.router.js.map