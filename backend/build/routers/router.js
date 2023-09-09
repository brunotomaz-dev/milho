"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_router_1 = __importDefault(require("./auth.router"));
const question_router_1 = __importDefault(require("./question.router"));
const score_router_1 = __importDefault(require("./score.router"));
const user_router_1 = __importDefault(require("./user.router"));
const router = (0, express_1.Router)();
router.use('/auth', auth_router_1.default);
router.use('/user', user_router_1.default);
router.use('/score', score_router_1.default);
router.use('/questions', question_router_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map