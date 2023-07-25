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
const jwt_utils_1 = require("../jwt/jwt.utils");
const validations_1 = require("../utils/validations");
class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
        this._userModel = userModel || new User_ODM_1.default();
    }
    static async validatePassword(password, hashedPassword) {
        return bcrypt_1.default.compare(password, hashedPassword);
    }
    async authUser(email, password) {
        const validate = (0, validations_1.userLoginValidation)({ email, password });
        if (validate.error)
            throw new errors.BadRequestError(validate.error.message);
        const user = await this._userModel.read(email);
        if (!user)
            throw new errors.NotFoundError('User not found');
        const validatePassword = await AuthService.validatePassword(password, user.password);
        if (!validatePassword)
            throw new errors.UnauthorizedError('Invalid password');
        return user;
    }
    async login(user) {
        const userFound = await this.authUser(user.email, user.password);
        const token = (0, jwt_utils_1.createToken)(userFound);
        return token;
    }
    async validateUser(token) {
        if (!token)
            throw new errors.NotFoundError('token not found');
        const user = (0, jwt_utils_1.verifyToken)(token);
        const userFound = await this._userModel.read(user.email);
        if (!userFound)
            throw new errors.NotFoundError('User not found');
        return { name: userFound.name, role: userFound.role };
    }
}
exports.default = AuthService;
//# sourceMappingURL=Auth.Service.js.map