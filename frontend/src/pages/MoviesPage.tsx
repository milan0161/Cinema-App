import MovieList from '../features/movies/data/MovieList';

const MoviesPage = () => {
  return (
    <div className="mx-28">
      <div>
        <h1 className="text-center text-[45px] my-10">Movies in our cinema</h1>
        <MovieList />
      </div>
    </div>
  );
};

export default MoviesPage;
