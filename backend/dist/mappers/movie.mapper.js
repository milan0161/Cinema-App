"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieMapper = void 0;
class MovieMapper {
    static toDTO(movie) {
        return {
            id: movie.id,
            title: movie.title,
            actors: movie.actors,
            description: movie.description,
            director: movie.director,
            genre: movie.genre,
            image: movie.genre,
            year: movie.year,
        };
    }
}
exports.MovieMapper = MovieMapper;
