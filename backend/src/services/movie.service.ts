import { PrismaClient } from '@prisma/client';
import { ReqMovieDto, ResMovieDtoInterface } from '../dto/movie/movie.dto';
import { MovieMapper } from '../mappers/movie/movie.mapper';
import { NotFoundError } from '../errors/not-found';
import { BadRequestError } from '../errors/bad-request';
import { clearImage } from '../utils/deletePicture';
class MovieService {
  public movie = new PrismaClient().movie;

  public createMovie = async (dto: ReqMovieDto): Promise<ResMovieDtoInterface> => {
    const movie = await this.movie.create({
      data: { ...dto, image: dto.image!.path.replaceAll('\\', '/') },
    });
    const resDto = MovieMapper.toDTO(movie);
    return resDto;
  };
  public getAllMovies = async (): Promise<ResMovieDtoInterface[]> => {
    const movies = await this.movie.findMany();
    if (!movies) {
      throw new NotFoundError('No movies found');
    }
    let arrayDto: ResMovieDtoInterface[] = [];
    for (let movie of movies) {
      arrayDto.push(MovieMapper.toDTO(movie));
    }
    return arrayDto;
  };

  public getSingleMovie = async (id: string): Promise<ResMovieDtoInterface> => {
    const movie = await this.movie.findUnique({
      where: {
        id,
      },
    });
    if (!movie) {
      throw new NotFoundError('Movie not found');
    }
    const dto = MovieMapper.toDTO(movie);
    return dto;
  };
  public deleteMovie = async (id: string): Promise<string> => {
    const deleteMovie = await this.movie.delete({
      where: {
        id,
      },
    });
    clearImage(deleteMovie.image);
    const findMovie = await this.movie.findUnique({
      where: {
        id,
      },
    });
    if (findMovie) {
      throw new BadRequestError(`Couldn't delete movie`);
    }
    return 'Movie successfully deleted';
  };
}
export default MovieService;
