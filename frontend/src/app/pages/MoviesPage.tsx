import MovieList from '../../features/movies/data/MovieList';

const MoviesPage = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-[45px] my-10">Movies in our cinema</h1>
      <MovieList />
    </div>
  );
};

export default MoviesPage;
