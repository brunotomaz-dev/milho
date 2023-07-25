"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (error, _req, res, _next) => {
    const status = error.statusCode;
    res.status(status);
    res.json({
        error: error.name,
        message: error.message,
    });
};
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map