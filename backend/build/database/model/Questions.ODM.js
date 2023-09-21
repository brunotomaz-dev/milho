"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class QuestionsODM {
    constructor() {
        const questionSchema = new mongoose_1.Schema({
            question: { type: String, required: true },
            answer: { type: String, required: true },
            options: { type: [String], required: true },
        });
        this._schema = new mongoose_1.Schema({
            tier: { type: String, required: true },
            questions: [questionSchema],
        });
        this._model = mongoose_1.models.Questions || (0, mongoose_1.model)('Questions', this._schema);
    }
    async create(questions) {
        return this._model.create({ ...questions });
    }
    async read(tier) {
        return this._model.findOne({ tier });
    }
    async addQuestionToTier(tier, question) {
        return this._model
            .findOneAndUpdate({ tier }, { $addToSet: { questions: question } }, { new: true });
    }
    async update(tier, question) {
        const update = {
            $set: {
                [`${tier}.$[elem].question`]: question.question,
                [`${tier}.$[elem].answer`]: question.answer,
                [`${tier}.$[elem].options`]: question.options,
            },
        };
        const options = {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            arrayFilters: [{ 'elem.id': question.id }],
            new: true,
        };
        return this._model.findOneAndUpdate({ tier, [`${tier}.id`]: question.id }, update, options);
    }
}
exports.default = QuestionsODM;
//# sourceMappingURL=Questions.ODM.js.map