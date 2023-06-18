"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const auth_service_1 = __importDefault(require("../services/auth.service"));
const auth_dto_1 = require("../dto/auth.dto");
class AuthController {
    authService = new auth_service_1.default();
    registerUser = async (req, res, next) => {
        try {
            const authDto = new auth_dto_1.AuthDto();
            const { password, username } = req.body;
            authDto.password = password;
            authDto.username = username;
            const aToken = await this.authService.registerUser(authDto);
            res.status(http_status_codes_1.StatusCodes.CREATED).json({ aToken: aToken });
        }
        catch (error) {
            next(error);
        }
    };
    loginUser = async (req, res, next) => {
        try {
            const authDto = new auth_dto_1.AuthDto();
            const { password, username } = req.body;
            authDto.password = password;
            authDto.username = username;
            const Atoken = await this.authService.loginUser(authDto);
            res.status(http_status_codes_1.StatusCodes.OK).json({ aToken: Atoken });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.default = AuthController;
