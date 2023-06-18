import { Movie } from '@prisma/client';
import { ResMovieDtoInterface } from '../../dto/movie/movie.dto';
export declare class MovieMapper {
    static toDTO(movie: Movie): ResMovieDtoInterface;
}
