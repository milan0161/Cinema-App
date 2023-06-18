import { Movie, Projection } from '@prisma/client';
import { IProjectionDto, ProjectionDtoInterface } from '../../dto/projection/projection.dto';

export class ProjectionMapper {
  static toDto(data: { projection: Projection; movie: Movie }): ProjectionDtoInterface {
    return {
      id: data.projection.id,
      time: data.projection.date,
      movie: data.movie,
    };
  }
  static toSingleProjDto(data: { movie: Movie; date: Date[] }): IProjectionDto {
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
