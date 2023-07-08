"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class UserODM {
    constructor() {
        this._schema = new mongoose_1.Schema({
            name: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            role: { type: String, required: true },
        });
        this._model = mongoose_1.models.User || (0, mongoose_1.model)('User', this._schema);
    }
    async create(user) {
        return this._model.create({ ...user });
    }
    async read(email) {
        return this._model.findOne({ email });
    }
}
exports.default = UserODM;
//# sourceMappingURL=User.ODM.js.map