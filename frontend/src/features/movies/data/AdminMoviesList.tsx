import { useGetMoviesQuery } from '../api/movieApi';
import AdminSingleMovie from './AdminSingleMovie';

const MoviesList = () => {
  const { data, isError, error, isLoading } = useGetMoviesQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <ul className="flex flex-row justify-evenly flex-wrap pb-2">
      {isError ? (
        <p className="text-center text-red-600">{error?.message}</p>
      ) : (
        ''
      )}
      {data?.map((movie) => {
        return <AdminSingleMovie key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

export default MoviesList;
