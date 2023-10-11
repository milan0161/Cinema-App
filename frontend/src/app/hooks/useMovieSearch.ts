import { useEffect, useState } from 'react';
import { useGetMoviesQuery } from '../../features/movies/api/movieApi';
import { Movie } from '../../features/movies/types';

const useMovieSearch = (searchTerm: string, cursor: number) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const {
    data: response,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetMoviesQuery({
    cursor: cursor,
    searchTerm: searchTerm,
  });
  console.log(searchTerm);
  useEffect(() => {
    setMovies([]);
  }, [searchTerm]);

  const crs = response?.cursor;
  useEffect(() => {
    // console.log(isSuccess, isLoading, response?.data.length);
    if (isSuccess && !isLoading && response.data.length > 0) {
      setMovies((prev) => {
        return [...new Set([...prev, ...response!.data])];
      });
    }
  }, [isLoading, isSuccess, cursor]);

  return { crs, movies, isLoading, isError, error };
};

export default useMovieSearch;
