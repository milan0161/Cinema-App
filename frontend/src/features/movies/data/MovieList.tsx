import { useSelector } from 'react-redux';
import { selectMovieData, useGetMoviesQuery } from '../api/movieApi';
import SingleMovie from './SingleMovie';
import { useAppSelector } from '../../../app/store/store';
import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';

const MovieList = (): JSX.Element => {
  const { isError, error, isLoading } = useGetMoviesQuery();
  const data = useAppSelector(selectMovieData);

  if (isError) {
    return <p className="text-center text-red-500">{error.message}</p>;
  }
  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <ul className="grid grid-cols-6 border border-slate-300 grid-flow-row gap-y-10 gap-x-2 p-2 overflow-auto">
      {data?.map((m) => {
        return <SingleMovie key={m.id} movie={m} showHover={true} />;
      })}
    </ul>
  );
};

export default MovieList;
