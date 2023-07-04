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
const User_1 = __importDefault(require("../domains/User"));
const User_ODM_1 = __importDefault(require("../model/User.ODM"));
class NewUserService {
    constructor(userModel) {
        this.userModel = userModel;
        this._userModel = userModel || new User_ODM_1.default();
    }
    static createUserDomain(user) {
        return new User_1.default(user);
    }
    async create(user) {
        const userCreated = await this._userModel.create(user);
        if (!userCreated)
            throw new errors.BadRequestError('User not created');
        return NewUserService.createUserDomain(userCreated);
    }
    async read(email) {
        const user = await this._userModel.read(email);
        if (!user)
            return null;
        return NewUserService.createUserDomain(user);
    }
}
exports.default = NewUserService;
//# sourceMappingURL=NewUser.Service.js.map