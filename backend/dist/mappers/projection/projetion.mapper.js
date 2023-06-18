"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectionMapper = void 0;
class ProjectionMapper {
    static toDto(data) {
        return {
            id: data.projection.id,
            time: data.projection.date,
            movie: data.movie,
        };
    }
    static toSingleProjDto(data) {
        return {
            movie: {
                actors: data.movie.actors,
                description: data.movie.description,
                director: data.movie.director,
                genre: data.movie.genre,
                id: data.movie.id,
                image: data.movie.image,
                title: data.movie.title,
                year: data.movie.year,
            },
            projections: data.date,
        };
    }
}
exports.ProjectionMapper = ProjectionMapper;
