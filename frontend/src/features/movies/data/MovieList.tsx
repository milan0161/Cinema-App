import { useGetMoviesQuery } from '../api/movieApi';
import SingleMovie from './SingleMovie';

const MovieList = (): JSX.Element => {
  const { data, isError, error } = useGetMoviesQuery();
  if (isError) {
    return <p className="text-center text-red-500">{error.message}</p>;
  }

  return (
    <ul className="grid grid-cols-6 border border-slate-300 grid-flow-row gap-y-10 gap-x-2 p-2 overflow-auto">
      {data?.movies.map((m) => {
        return <SingleMovie key={m.id} movie={m} />;
      })}
    </ul>
  );
};

export default MovieList;
