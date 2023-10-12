import { publicUrl } from '../../../api/axios';
import { Movie } from '../../movies/types';

type ProjectionMovieProps = {
  movie: Movie | undefined;
};

const ProjectionMovie = ({ movie }: ProjectionMovieProps) => {
  let movieImage = movie?.mainPhoto?.startsWith('public')
    ? `${publicUrl}/${movie?.mainPhoto}`
    : `${movie?.mainPhoto}`;
  return (
    <section className="flex-1 h-fit projection_details_movie mt-10 flex flex-row text-sm max-h-[500px] w-[500px] xl:w-full">
      <div className="flex-1">
        <img className="w-full h-full" src={movieImage} />
      </div>
      <div className="flex-1 px-5 pb-10 flex flex-col gap-2 justify-between">
        <h2 className="text-center mt-2">{movie?.name}</h2>
        <p>
          <strong>Year: </strong>
          {movie?.year}
        </p>
        <p>
          <strong>Duration: </strong>
          {movie?.duration} min
        </p>
        <p>
          <strong>Stars: </strong>
          {movie?.actors}
        </p>
        <p>
          <strong>Director: </strong>
          {movie?.director}
        </p>
        <p>
          <strong>Country: </strong>
          {movie?.country}
        </p>
        <p>
          <strong>Genre: </strong>
          {movie?.genre}
        </p>
        <p>
          <strong>Description: </strong>
          {movie?.description}
        </p>
      </div>
    </section>
  );
};

export default ProjectionMovie;
