"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("../services/users.service"));
const http_status_codes_1 = require("http-status-codes");
class UsersController {
    constructor() {
        this.usersService = new users_service_1.default();
        this.registerUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { password, username } = req.body;
                const user = yield this.usersService.registerUser({ password, username });
                res.status(http_status_codes_1.StatusCodes.CREATED).json({ user: user });
            }
            catch (error) {
                console.log(error);
            }
        });
        this.loginUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { password, username } = req.body;
                const user = yield this.usersService.loginUser({
                    password,
                    username,
                });
                res.status(http_status_codes_1.StatusCodes.OK).json({ aToken: user });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = UsersController;
