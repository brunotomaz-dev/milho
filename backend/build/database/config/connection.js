"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = require("mongoose");
const options = {
    dbName: process.env.MONGO_DBNAME,
};
const connectToDatabase = () => (0, mongoose_1.connect)(process.env.MONGO_URL, options)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));
exports.default = connectToDatabase;
//# sourceMappingURL=connection.js.map