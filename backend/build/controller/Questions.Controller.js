"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_Service_1 = __importDefault(require("../service/Auth.Service"));
const Questions_Service_1 = __importDefault(require("../service/Questions.Service"));
class QuestionsController {
    constructor(req, res, next, questionsService) {
        this._questionsService = questionsService || new Questions_Service_1.default();
        this._authService = new Auth_Service_1.default();
        this.req = req;
        this.res = res;
        this.next = next;
    }
    async read() {
        const { tier } = this.req.params;
        const questions = await this._questionsService.read(tier);
        this.res.status(200).json({ data: questions });
    }
    async addQuestion() {
        const user = await this._authService.validateUser(this.req.headers.authorization);
        const { tier } = this.req.params;
        const question = this.req.body;
        const newQuestion = await this._questionsService.addQuestion(user.role, tier, question);
        this.res.status(201).json({ ...newQuestion });
    }
}
exports.default = QuestionsController;
//# sourceMappingURL=Questions.Controller.js.map