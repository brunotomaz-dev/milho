"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_ODM_1 = __importDefault(require("../model/User.ODM"));
let data;
class SeedUser extends User_ODM_1.default {
    async seedMany() {
        await this._model.insertMany(data);
    }
}
data = [
    {
        name: 'Admin',
        email: 'admin@admin.game',
        password: '$2a$10$JMEiL6cG2/CkoYvAPFmGk.UMoOTX8CKsh3vuh6dJpv4WvjDvtQ4Vi',
        role: 'admin',
    },
    {
        name: 'Guest',
        email: 'guest@guest.game',
        password: '$2a$10$qGQkHRQpKvQSJew.RjEf4Oo1flt196x7L1NwXoPET1oyf826lPMbS',
        role: 'user',
    },
];
exports.default = SeedUser;
//# sourceMappingURL=userSeed.js.map