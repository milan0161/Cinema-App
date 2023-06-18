import { Movie } from '../../movies/types';

export interface Projection {
  id: string;
  movie: Movie;
  time: Date;
}

export interface CreateProjectionRequest {
  id: string;
  date: string;
  hallName: string;
}

export interface CreateProjectionResponse {
  projection: Projection;
}

export interface IProjections {
  projections: { movie: Movie; projections: Date[] }[];
}
