"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const passwords_1 = require("../utils/passwords");
const jwt_1 = require("../utils/jwt");
const index_1 = __importDefault(require("../errors/index"));
class AuthService {
    constructor() {
        this.users = new client_1.PrismaClient().user;
        this.registerUser = async (dto) => {
            const hashedPw = await (0, passwords_1.hashPassword)(dto.password);
            const list = await this.users.findMany();
            let role = 'USER';
            if (list.length === 0) {
                role = 'ADMIN';
            }
            const user = await this.users.create({
                data: {
                    username: dto.username,
                    password: hashedPw,
                    role: role,
                },
            });
            const aToken = (0, jwt_1.signAtoken)(user.username, user.role);
            return aToken;
        };
        this.loginUser = async (dto) => {
            const user = await this.users.findUnique({
                where: {
                    username: dto.username,
                },
            });
            if (!user) {
                throw new index_1.default.NotFoundError('User with that username does not exist');
            }
            const comparePw = await (0, passwords_1.verifyPassword)(dto.password, user.password);
            if (!comparePw) {
                throw new index_1.default.BadRequestError('Password is invalid');
            }
            const aToken = (0, jwt_1.signAtoken)(user.username, user.role);
            return aToken;
        };
    }
}
exports.default = AuthService;
