import { Movie } from '../../movies/types';

export interface Projection {
  id: string;
  movie: Movie;
  time: Date;
}

export interface CreateProjectionRequest {
  movieId: number;
  showingTime: string;
  hallName: string;
  ticketPrice: number;
}

export interface CreateProjectionResponse {
  projection: Projection;
}

export interface IProjection {
  id: number;
  movie: Movie;
  showingTime: string;
  hall: {
    name: string;
  };
  ticketPrice: number;
}
export interface EditProjection {
  showingTime: string;
  hallName: string;
  ticketPrice: number;
  id: number;
}
export interface ProjectionDetails {
  id: number;
  movie: Movie;
  showingTime: string;
  hall: {
    name: string;
  };
  seats: Seat[];
  ticketPrice: number;
}
export interface Seat {
  id: number;
  number: number;
  available: boolean;
}
