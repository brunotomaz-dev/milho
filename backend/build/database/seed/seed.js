"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connection_1 = __importDefault(require("../config/connection"));
const questionsSeed_1 = __importDefault(require("./questionsSeed"));
const userSeed_1 = __importDefault(require("./userSeed"));
const seedUser = new userSeed_1.default();
const seedQuestions = new questionsSeed_1.default();
(0, connection_1.default)();
seedQuestions.seedMany();
seedUser.seedMany()
    .then(() => {
    mongoose_1.default.connection.close()
        .then(() => console.log('Database disconnected'))
        .catch((err) => console.log(err));
});
//# sourceMappingURL=seed.js.map