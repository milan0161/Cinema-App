import { Movie } from '@prisma/client';
import { ResMovieDtoInterface } from '../../dto/movie/movie.dto';

export class MovieMapper {
  static toDTO(movie: Movie): ResMovieDtoInterface {
    return {
      id: movie.id,
      title: movie.title,
      actors: movie.actors,
      description: movie.description,
      director: movie.director,
      genre: movie.genre,
      image: movie.image!,
      year: movie.year,
      duration: movie.duration,
    };
  }
}
