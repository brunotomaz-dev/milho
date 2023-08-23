"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class ScoreODM {
    constructor() {
        this._schema = new mongoose_1.Schema({
            name: { type: String, required: true },
            score: { type: Number, required: true },
            date: { type: Date, required: true },
        });
        this._model = mongoose_1.models.Score || (0, mongoose_1.model)('Score', this._schema);
    }
    async create(score) {
        return this._model.create({ ...score });
    }
    async read(name) {
        return this._model.findOne({ name });
    }
    async readAll() {
        return this._model.find().sort({ score: -1 }).limit(10);
    }
}
exports.default = ScoreODM;
//# sourceMappingURL=Score.ODM.js.map