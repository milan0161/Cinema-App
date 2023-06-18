"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const projection_service_1 = __importDefault(require("../services/projection.service"));
const http_status_codes_1 = require("http-status-codes");
class ProjectionController {
    projectionService = new projection_service_1.default();
    createProjection = async (req, res, next) => {
        try {
            const movieId = req.params.id;
            const { date, hallName } = req.body;
            const projection = await this.projectionService.createProjection({ movieId, date, hallName });
            res.status(http_status_codes_1.StatusCodes.CREATED).json({ projection });
        }
        catch (error) {
            next(error);
        }
    };
    getProjection = async (req, res, next) => {
        try {
            const { date } = req.query;
            const projections = await this.projectionService.getProjections(date);
            res.status(http_status_codes_1.StatusCodes.OK).json({ projections });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.default = ProjectionController;
