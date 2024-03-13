"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Questions_ODM_1 = __importDefault(require("../model/Questions.ODM"));
const questionsData_1 = __importDefault(require("./questionsData"));
const questionsData = questionsData_1.default;
class SeedQuestions extends Questions_ODM_1.default {
    async seedMany() {
        await this._model.insertMany(questionsData);
    }
}
exports.default = SeedQuestions;
//# sourceMappingURL=questionsSeed.js.map