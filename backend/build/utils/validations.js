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
exports.userLoginValidation = exports.userValidation = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
const joi = __importStar(require("joi"));
const userValidation = (user) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        name: joi.string().required(),
        password: joi.string().min(4).required(),
        role: joi.string().valid('admin', 'user').required(),
    });
    return schema.validate(user);
};
exports.userValidation = userValidation;
const userLoginValidation = (user) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).required().messages({
            'string.empty': 'Invalid password',
            'string.min': 'Invalid password',
        }),
    });
    return schema.validate(user);
};
exports.userLoginValidation = userLoginValidation;
//# sourceMappingURL=validations.js.map