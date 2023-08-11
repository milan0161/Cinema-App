import { ReqMovieDto, ResMovieDtoInterface } from '../dto/movie/movie.dto';
declare class MovieService {
    movie: import(".prisma/client").Prisma.MovieDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
    createMovie: (dto: ReqMovieDto) => Promise<ResMovieDtoInterface>;
    getAllMovies: () => Promise<ResMovieDtoInterface[]>;
    getSingleMovie: (id: string) => Promise<ResMovieDtoInterface>;
    deleteMovie: (id: string) => Promise<string>;
    getPictures: () => Promise<{
        title: string;
        description: string;
        image: string;
    }[]>;
}
export default MovieService;
