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
exports.verifyToken = exports.createToken = void 0;
require("dotenv/config");
const jwt = __importStar(require("jsonwebtoken"));
const errors = __importStar(require("restify-errors"));
const createToken = (user) => {
    const jwtKey = process.env.JWT_SECRET;
    const token = jwt.sign({
        email: user.email,
        name: user.name,
        role: user.role,
    }, jwtKey, {
        expiresIn: '5h',
        algorithm: 'HS256',
    });
    return token;
};
exports.createToken = createToken;
const verifyToken = (token) => {
    const jwtKey = process.env.JWT_SECRET;
    try {
        const decoded = jwt.verify(token, jwtKey);
        return decoded;
    }
    catch (error) {
        throw new errors.UnauthorizedError('Invalid token');
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.utils.js.map