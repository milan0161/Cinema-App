"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const movie_mapper_1 = require("../mappers/movie/movie.mapper");
const not_found_1 = require("../errors/not-found");
const bad_request_1 = require("../errors/bad-request");
const deletePicture_1 = require("../utils/deletePicture");
class MovieService {
    movie = new client_1.PrismaClient().movie;
    createMovie = async (dto) => {
        const movie = await this.movie.create({
            data: { ...dto, image: dto.image.path.replaceAll('\\', '/') },
        });
        const resDto = movie_mapper_1.MovieMapper.toDTO(movie);
        return resDto;
    };
    getAllMovies = async () => {
        const movies = await this.movie.findMany();
        if (!movies) {
            throw new not_found_1.NotFoundError('No movies found');
        }
        let arrayDto = [];
        for (let movie of movies) {
            arrayDto.push(movie_mapper_1.MovieMapper.toDTO(movie));
        }
        return arrayDto;
    };
    getSingleMovie = async (id) => {
        const movie = await this.movie.findUnique({
            where: {
                id,
            },
        });
        if (!movie) {
            throw new not_found_1.NotFoundError('Movie not found');
        }
        const dto = movie_mapper_1.MovieMapper.toDTO(movie);
        return dto;
    };
    deleteMovie = async (id) => {
        const deleteMovie = await this.movie.delete({
            where: {
                id,
            },
        });
        (0, deletePicture_1.clearImage)(deleteMovie.image);
        const findMovie = await this.movie.findUnique({
            where: {
                id,
            },
        });
        if (findMovie) {
            throw new bad_request_1.BadRequestError(`Couldn't delete movie`);
        }
        return 'Movie successfully deleted';
    };
    getPictures = async () => {
        const movie = await this.movie.findMany({
            take: 5,
            select: {
                image: true,
                description: true,
                title: true,
            },
        });
        if (movie.length === 0) {
            throw new not_found_1.NotFoundError('No pictures found');
        }
        return movie;
    };
}
exports.default = MovieService;
