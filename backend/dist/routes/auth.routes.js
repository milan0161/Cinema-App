"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const validation_middleware_1 = __importDefault(require("../middleware/validation-middleware"));
const auth_dto_1 = require("../dto/auth.dto");
const authRouter = (0, express_1.Router)();
const authControler = new auth_controller_1.default();
authRouter.post('/auth/register', (0, validation_middleware_1.default)(auth_dto_1.AuthDto), authControler.registerUser);
authRouter.post('/auth/login', authControler.loginUser);
exports.default = authRouter;
