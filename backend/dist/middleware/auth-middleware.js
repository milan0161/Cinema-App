"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forbidden_error_1 = require("../errors/forbidden-error");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
// declare module 'express-serve-static-core' {
//     interface Request{
//         id: string
//     }
// }
const aTokenSecret = process.env.A_TOKEN_SECRET;
const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.get('Authorization');
        if (!authHeader) {
            throw new forbidden_error_1.ForbiddenError('Not Authorized');
        }
        if (authHeader.split(' ')[0] !== 'Bearer') {
            throw new forbidden_error_1.ForbiddenError('Not Authorized');
        }
        jsonwebtoken_1.default.verify(authHeader.split(' ')[1], aTokenSecret, (error, payload) => {
            if (error) {
                throw new forbidden_error_1.ForbiddenError(error.message);
            }
        });
        next();
    }
    catch (error) {
        next(error);
    }
};
