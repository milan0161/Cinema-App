import { Movie } from '../types';
import AdminSingleMovie from './AdminSingleMovie';

type MoviesListProps = {
  movies: Movie[] | undefined;
};

const MoviesList = ({ movies: data }: MoviesListProps) => {
  return (
    <ul className="flex flex-row justify-evenly flex-wrap pb-2 mt-4 gap-x-4 gap-y-5">
      {data?.map((movie, i) => {
        if (data.length === i + 1) {
          return <AdminSingleMovie i={i} key={movie.id} movie={movie} />;
        }
        return <AdminSingleMovie i={i} key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

export default MoviesList;
