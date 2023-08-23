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
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors = __importStar(require("restify-errors"));
const User_ODM_1 = __importDefault(require("../database/model/User.ODM"));
const User_1 = __importDefault(require("../domains/User"));
const jwt_utils_1 = require("../jwt/jwt.utils");
const validations_1 = require("../utils/validations");
class UserService {
    constructor(userModel) {
        this.userModel = userModel;
        this._userModel = userModel || new User_ODM_1.default();
    }
    static createUserDomain(user) {
        return new User_1.default(user);
    }
    static async userValidation(user) {
        const isValidUser = (0, validations_1.userValidation)(user);
        if (isValidUser.error)
            throw new errors.BadRequestError(isValidUser.error.message);
        return user;
    }
    static async passwordHash(password) {
        const salt = await bcrypt_1.default.genSalt(10);
        const hashedPassword = await bcrypt_1.default.hash(password, salt);
        return hashedPassword;
    }
    async create(user) {
        await UserService.userValidation(user);
        const hashedPassword = await UserService.passwordHash(user.password);
        const userFound = await this._userModel.read(user.email);
        if (userFound)
            throw new errors.ConflictError('User already exists');
        const userCreated = await this._userModel.create({ ...user, password: hashedPassword });
        const newUser = UserService.createUserDomain(userCreated);
        return (0, jwt_utils_1.createToken)(newUser);
    }
    async readAll(token) {
        if (!token)
            throw new errors.NotFoundError('token not found');
        const user = (0, jwt_utils_1.verifyToken)(token);
        const userFound = await this._userModel.read(user.email);
        if (!userFound)
            throw new errors.NotFoundError('User not found');
        if (userFound.role !== 'admin')
            throw new errors.UnauthorizedError('User not authorized');
        const users = await this._userModel.readAll();
        return users;
    }
}
exports.default = UserService;
//# sourceMappingURL=User.Service.js.map