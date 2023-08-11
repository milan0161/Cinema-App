import { Request, Response, NextFunction } from 'express';
declare class MovieController {
    private movieService;
    createMovie: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllMovies: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getSingleMovie: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteMovie: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getPictures: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default MovieController;
