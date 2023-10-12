import MovieList from '../../features/movies/data/MovieList';

const MoviesPage = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-[2.2rem] my-10 tracking-wide">
        Movies in our cinema
      </h1>
      <MovieList />
    </div>
  );
};

export default MoviesPage;
