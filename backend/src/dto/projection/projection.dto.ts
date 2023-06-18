import { ResMovieDtoInterface } from '../movie/movie.dto';

export interface ProjectionDtoInterface {
  id: string;
  movie: ResMovieDtoInterface;
  time: Date;
}
export interface IProjectionDto {
  movie: ResMovieDtoInterface;
  projections: Date[];
}

interface ISingleProjection {
  time: Date;
}
