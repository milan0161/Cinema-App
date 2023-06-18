import { Trim } from 'class-sanitizer';
import { IsString, IsNotEmpty } from 'class-validator';
import { Request } from 'express';

let req: Request;

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

export class ReqMovieDto implements ReqMovieDtoInterface {
  @IsNotEmpty({ message: 'Title must be provided' })
  @IsString()
  @Trim()
  title!: string;

  @IsNotEmpty({ message: 'Genre must be provided' })
  @IsString()
  @Trim()
  genre!: string;

  @IsNotEmpty({ message: 'Year must be provided' })
  // @IsNumber()
  @Trim()
  year!: number;

  @IsNotEmpty({ message: 'Actors must be provided' })
  @IsString()
  @Trim()
  actors!: string;

  @IsNotEmpty({ message: 'Director must be provided' })
  @IsString()
  @Trim()
  director!: string;

  @IsNotEmpty({ message: 'Description must be provided' })
  @IsString()
  @Trim()
  description!: string;

  image!: typeof req.file;
}
