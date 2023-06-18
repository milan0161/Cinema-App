import { Movie } from '@prisma/client';
import { MovieDto } from '../dto/movie/movie.dto';
export declare class MovieMapper {
    static toDTO(movie: Movie): MovieDto;
}
