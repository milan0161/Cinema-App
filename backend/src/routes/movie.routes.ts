import { Router } from 'express';
import MovieController from '../controllers/movie.controller';
import isAdmin from '../middleware/admin-middleware';
import dtoValidationMiddleware from '../middleware/validation-middleware';
import { ReqMovieDto } from '../dto/movie/movie.dto';
const movieRouter = Router();
const movieController = new MovieController();

movieRouter.post('/movie/create', isAdmin, dtoValidationMiddleware(ReqMovieDto), movieController.createMovie);
movieRouter.get('/movie/get-all', movieController.getAllMovies);
movieRouter.get('/movie/get-single-movie/:id', movieController.getSingleMovie);
movieRouter.delete('/movie/delete/:id', isAdmin, movieController.deleteMovie);
//route that returns 5 pictures of last addded movies for slider.
movieRouter.get('/movie/get-pictures', movieController.getPictures);

export default movieRouter;
