import { useState } from 'react';
import AdminSearchBar from '../../../common/components/admin/AdminSearchBar';
import AddMovieForm from '../../../common/components/form/AddMovieForm';
import MoviesList from '../../../features/movies/data/AdminMoviesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';
import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';
import { useGetMoviesQuery } from '../../../features/movies/api/movieApi';
import PaginationComponent from '../../../common/components/ui/PaginationComponent';

const AdminMoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isAddingMovie, setIsAddingMovie] = useState<boolean>(false);
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useGetMoviesQuery({
    pageNumber: page,
    searchTerm,
    pageSize: 10,
  });

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const addMovieHandle = () => {
    setIsAddingMovie(true);
  };
  const cancelHandler = () => {
    setIsAddingMovie(false);
  };

  const searchMovieHandler = (searchData: string) => {
    setSearchTerm(searchData);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };
  return (
    <div className="w-full overflow-auto px-2 flex flex-col ">
      {isError ? (
        <p className="text-center text-red-600">{error?.message}</p>
      ) : (
        ''
      )}
      <div className="grid grid-cols-10 border-b-2">
        <h2 className="ml-24 text-center p-2 text-2xl font-bold col-start-1 col-end-10">
          Movie List
        </h2>
        <div className="col-start-10 col-end-11 flex items-center justify-center">
          <button
            type="button"
            onClick={addMovieHandle}
            className="hover:outline hover:outline-slate-300 duration-150 p-1"
          >
            <FontAwesomeIcon icon={faAdd} className="" />
            <span className="mx-1">Movie</span>
          </button>
        </div>
      </div>
      {!isAddingMovie && <AdminSearchBar searchHandler={searchMovieHandler} />}
      {!isAddingMovie && (
        <>
          <div className="flex flex-col gap-y-3">
            <MoviesList movies={response?.data} />
            {!searchTerm && (
              <PaginationComponent
                count={response?.totalPages}
                page={page}
                onChange={handleChange}
              />
            )}
          </div>
        </>
      )}
      <AnimatePresence>
        {isAddingMovie && <AddMovieForm cancelHandler={cancelHandler} />}
      </AnimatePresence>
    </div>
  );
};

export default AdminMoviesPage;
