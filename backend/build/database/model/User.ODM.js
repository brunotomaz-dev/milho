"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class UserODM {
    constructor() {
        this._schema = new mongoose_1.Schema({
            id: { type: Number, required: true, unique: true },
            name: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            role: { type: String, required: true },
        });
        this._model = (0, mongoose_1.model)('User', this._schema);
    }
    async create(user) {
        return this._model.create({ ...user });
    }
    async read(name) {
        return this._model.findOne({ name });
    }
    async update(id, user) {
        if ((0, mongoose_1.isValidObjectId)(id)) {
            return this._model.findByIdAndUpdate(id, { ...user });
        }
        throw new Error('Invalid ObjectId');
    }
    async delete(id) {
        if ((0, mongoose_1.isValidObjectId)(id)) {
            return this._model.findByIdAndDelete(id);
        }
        throw new Error('Invalid ObjectId');
    }
}
exports.default = UserODM;
//# sourceMappingURL=User.ODM.js.map