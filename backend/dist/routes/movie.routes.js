"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movie_controller_1 = __importDefault(require("../controllers/movie.controller"));
const admin_middleware_1 = __importDefault(require("../middleware/admin-middleware"));
const validation_middleware_1 = __importDefault(require("../middleware/validation-middleware"));
const movie_dto_1 = require("../dto/movie/movie.dto");
const movieRouter = (0, express_1.Router)();
const movieController = new movie_controller_1.default();
movieRouter.post('/movie/create', admin_middleware_1.default, (0, validation_middleware_1.default)(movie_dto_1.ReqMovieDto), movieController.createMovie);
movieRouter.get('/movie/get-all', movieController.getAllMovies);
movieRouter.get('/movie/get-single-movie/:id', movieController.getSingleMovie);
movieRouter.delete('/movie/delete/:id', admin_middleware_1.default, movieController.deleteMovie);
exports.default = movieRouter;
