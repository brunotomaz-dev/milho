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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const httpException_1 = __importStar(require("../utils/httpException"));
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
    async update(id, user) {
        if ((0, mongoose_1.isValidObjectId)(id)) {
            return this._model.findByIdAndUpdate(id, { ...user }, { new: true });
        }
        throw new httpException_1.default(httpException_1.StatusCodes.UNPROCESSED_ENTITY, 'Invalid ObjectId');
    }
    async delete(id) {
        if ((0, mongoose_1.isValidObjectId)(id)) {
            return this._model.findByIdAndDelete(id);
        }
        throw new httpException_1.default(httpException_1.StatusCodes.UNPROCESSED_ENTITY, 'Invalid ObjectId');
    }
}
exports.default = UserODM;
//# sourceMappingURL=User.ODM.js.map