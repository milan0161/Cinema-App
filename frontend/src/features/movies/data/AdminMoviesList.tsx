import { useGetMoviesQuery } from '../api/movieApi';
import AdminSingleMovie from './AdminSingleMovie';

const MoviesList = () => {
  const { data, isError, error } = useGetMoviesQuery();

  return (
    <ul className="flex flex-row justify-evenly flex-wrap pb-2">
      {isError ? <p className="text-center text-red-600">{error?.message}</p> : ''}
      {data?.movies.map((movie) => {
        return <AdminSingleMovie key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

export default MoviesList;
