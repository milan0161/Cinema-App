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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const passwords_1 = require("../utils/passwords");
const jwt_1 = require("../utils/jwt");
class UsersService {
    constructor() {
        this.users = new client_1.PrismaClient().user;
        this.registerUser = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const hashedPw = yield (0, passwords_1.hashPassword)(data.password);
                const list = yield this.users.findMany();
                if (list.length === 0) {
                    const user = yield this.users.create({
                        data: {
                            username: data.username,
                            password: hashedPw,
                            role: 'ADMIN',
                        },
                    });
                    return user;
                }
                const user = yield this.users.create({
                    data: {
                        username: data.username,
                        password: hashedPw,
                    },
                });
                return user;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.loginUser = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.users.findUnique({
                    where: {
                        username: data.username,
                    },
                });
                if (!user) {
                    throw new Error('User with that username does not exist');
                }
                const comparePw = yield (0, passwords_1.verifyPassword)(data.password, user.password);
                if (!comparePw) {
                    throw new Error('Password is invalid');
                }
                const aToken = (0, jwt_1.signAtoken)(user.username);
                return aToken;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = UsersService;
