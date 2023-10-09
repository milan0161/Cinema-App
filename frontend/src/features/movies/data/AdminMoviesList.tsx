import { useAppSelector } from '../../../app/store/store';
import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';
import { selectMovieData, useGetMoviesQuery } from '../api/movieApi';
import AdminSingleMovie from './AdminSingleMovie';

const MoviesList = () => {
  const { isError, error, isLoading } = useGetMoviesQuery();
  const data = useAppSelector(selectMovieData);
  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <ul className="flex flex-row justify-evenly flex-wrap pb-2 mt-4 gap-x-4 gap-y-5">
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
