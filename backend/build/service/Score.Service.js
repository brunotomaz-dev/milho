"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors = __importStar(require("restify-errors"));
const Score_ODM_1 = __importDefault(require("../database/model/Score.ODM"));
const Score_1 = __importDefault(require("../domains/Score"));
class ScoreService {
    constructor(scoreModel) {
        this.scoreModel = scoreModel;
        this._scoreModel = scoreModel || new Score_ODM_1.default();
    }
    static createScoreDomain(score) {
        return new Score_1.default(score);
    }
    async create(score) {
        const scoreCreated = await this._scoreModel.create(score);
        if (!scoreCreated)
            throw new errors.BadRequestError('Score not created');
        const newScore = ScoreService.createScoreDomain(scoreCreated);
        return newScore;
    }
    async readAll() {
        const scores = await this._scoreModel.readAll();
        if (!scores)
            throw new errors.NotFoundError('Scores not found');
        return scores;
    }
    async read(name) {
        const score = await this._scoreModel.readManyByName(name);
        if (!score)
            throw new errors.NotFoundError('Score not found');
        return score;
    }
}
exports.default = ScoreService;
//# sourceMappingURL=Score.Service.js.map