import { Request } from 'express';
declare let req: Request;
export interface ReqMovieDtoInterface {
    title: string;
    genre: string;
    year: number;
    actors: string;
    director: string;
    description: string;
    image: typeof req.file;
}
export interface ResMovieDtoInterface {
    id: string;
    title: string;
    genre: string;
    projections?: string[];
    year: number;
    actors: string;
    director: string;
    description: string;
    image: string;
}
export declare class ReqMovieDto implements ReqMovieDtoInterface {
    title: string;
    genre: string;
    year: number;
    actors: string;
    director: string;
    description: string;
    image: typeof req.file;
}
export {};
