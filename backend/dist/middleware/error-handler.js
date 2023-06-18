"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../errors/index"));
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (error, req, res, next) => {
    if (error instanceof index_1.default.UnauthenticatedError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof index_1.default.BadRequestError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof index_1.default.NotFoundError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof index_1.default.ForbiddenError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.message
        // 'Something went wrong, please try again later',
    });
};
exports.default = errorHandlerMiddleware;
