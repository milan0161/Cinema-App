"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_dto_1 = require("../dto/movie/movie.dto");
const movie_service_1 = __importDefault(require("../services/movie.service"));
const http_status_codes_1 = require("http-status-codes");
const bad_request_1 = require("../errors/bad-request");
class MovieController {
    movieService = new movie_service_1.default();
    createMovie = async (req, res, next) => {
        try {
            const { actors, description, director, genre, title, year, duration } = req.body;
            if (!req.file) {
                throw new bad_request_1.BadRequestError('Image must be provided');
            }
            const movieDto = new movie_dto_1.ReqMovieDto();
            movieDto.title = title;
            movieDto.actors = actors;
            movieDto.description = description;
            movieDto.director = director;
            movieDto.year = Number(year);
            movieDto.genre = genre;
            movieDto.duration = Number(duration);
            movieDto.image = req.file;
            const dto = await this.movieService.createMovie(movieDto);
            res.status(http_status_codes_1.StatusCodes.CREATED).json({ movie: dto });
        }
        catch (error) {
            next(error);
        }
    };
    getAllMovies = async (req, res, next) => {
        try {
            const data = await this.movieService.getAllMovies();
            res.status(http_status_codes_1.StatusCodes.OK).json({ movies: data });
        }
        catch (error) {
            next(error);
        }
    };
    getSingleMovie = async (req, res, next) => {
        try {
            const id = req.params.id;
            const movie = await this.movieService.getSingleMovie(id);
            res.status(http_status_codes_1.StatusCodes.OK).json({ movie });
        }
        catch (error) {
            next(error);
        }
    };
    deleteMovie = async (req, res, next) => {
        try {
            const id = req.params.id;
            const message = await this.movieService.deleteMovie(id);
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: message });
        }
        catch (error) {
            next(error);
        }
    };
    getPictures = async (req, res, next) => {
        try {
            const pictures = await this.movieService.getPictures();
            res.status(http_status_codes_1.StatusCodes.OK).json({ images: pictures });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.default = MovieController;
