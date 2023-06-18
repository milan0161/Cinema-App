"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hallRouter = (0, express_1.Router)();
const hall_controller_1 = __importDefault(require("../controllers/hall.controller"));
const admin_middleware_1 = __importDefault(require("../middleware/admin-middleware"));
const hallControler = new hall_controller_1.default();
hallRouter.post('/hall/create', admin_middleware_1.default, hallControler.createHall);
exports.default = hallRouter;
