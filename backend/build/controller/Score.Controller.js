"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Score_Service_1 = __importDefault(require("../service/Score.Service"));
class ScoreController {
    constructor(req, res, next, scoreService) {
        this._scoreService = scoreService || new Score_Service_1.default();
        this.req = req;
        this.res = res;
        this.next = next;
    }
    async create() {
        const score = {
            name: this.req.body.name,
            score: this.req.body.score,
            date: new Date(),
        };
        const newScore = await this._scoreService.create(score);
        this.res.status(201).json({ newScore });
    }
    async readAll() {
        const scores = await this._scoreService.readAll();
        this.res.status(200).json({ scores });
    }
    async read() {
        const { name } = this.req.params;
        const score = await this._scoreService.read(name);
        this.res.status(200).json({ score });
    }
}
exports.default = ScoreController;
//# sourceMappingURL=Score.Controller.js.map