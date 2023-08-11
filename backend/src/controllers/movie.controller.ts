import { Request, Response, NextFunction } from 'express';
import { ReqMovieDto } from '../dto/movie/movie.dto';
import MovieService from '../services/movie.service';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/bad-request';

class MovieController {
  private movieService = new MovieService();

  public createMovie = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { actors, description, director, genre, title, year, duration } = req.body as ReqMovieDto;
      if (!req.file) {
        throw new BadRequestError('Image must be provided');
      }
      const movieDto = new ReqMovieDto();
      movieDto.title = title;
      movieDto.actors = actors;
      movieDto.description = description;
      movieDto.director = director;
      movieDto.year = Number(year);
      movieDto.genre = genre;
      movieDto.duration = Number(duration);
      movieDto.image = req.file;
      const dto = await this.movieService.createMovie(movieDto);
      res.status(StatusCodes.CREATED).json({ movie: dto });
    } catch (error) {
      next(error);
    }
  };

  public getAllMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.movieService.getAllMovies();
      res.status(StatusCodes.OK).json({ movies: data });
    } catch (error) {
      next(error);
    }
  };
  public getSingleMovie = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      const movie = await this.movieService.getSingleMovie(id);
      res.status(StatusCodes.OK).json({ movie });
    } catch (error) {
      next(error);
    }
  };
  public deleteMovie = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      const message = await this.movieService.deleteMovie(id);
      res.status(StatusCodes.OK).json({ message: message });
    } catch (error) {
      next(error);
    }
  };
  public getPictures = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const pictures = await this.movieService.getPictures();

      res.status(StatusCodes.OK).json({ images: pictures });
    } catch (error) {
      next(error);
    }
  };
}

export default MovieController;
