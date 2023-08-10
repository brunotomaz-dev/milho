"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connection_1 = __importDefault(require("../config/connection"));
const User_ODM_1 = __importDefault(require("../model/User.ODM"));
const userSeed_1 = __importDefault(require("./userSeed"));
class Seed extends User_ODM_1.default {
    async seedMany(data) {
        await this._model.insertMany(data);
    }
}
const seed = new Seed();
(0, connection_1.default)();
seed.seedMany(userSeed_1.default).then(() => {
    mongoose_1.default.connection.close()
        .then(() => console.log('Database disconnected'))
        .catch((err) => console.log(err));
});
//# sourceMappingURL=seed.js.map