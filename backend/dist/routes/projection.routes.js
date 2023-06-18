"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_middleware_1 = __importDefault(require("../middleware/admin-middleware"));
const projection_controller_1 = __importDefault(require("../controllers/projection.controller"));
const projectionController = new projection_controller_1.default();
const projectionRouter = (0, express_1.Router)();
projectionRouter.post('/projection/create/:id', admin_middleware_1.default, projectionController.createProjection);
projectionRouter.get('/projection/get-all', projectionController.getProjection);
exports.default = projectionRouter;
