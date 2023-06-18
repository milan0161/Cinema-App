"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hall_service_1 = __importDefault(require("../services/hall.service"));
const http_status_codes_1 = require("http-status-codes");
class HallController {
    hallService = new hall_service_1.default();
    createHall = async (req, res, next) => {
        try {
            const { number, name } = req.body;
            const hall = await this.hallService.crateHall({ name, number });
            res.status(http_status_codes_1.StatusCodes.CREATED).json({ message: hall });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.default = HallController;
