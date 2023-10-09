import { useState } from 'react';
// import AdminSearchBar from '@components/admin/AdminSearchBar';
import AdminSearchBar from '../../../common/components/admin/AdminSearchBar';
import AddMovieForm from '../../../common/components/form/AddMovieForm';
import MoviesList from '../../../features/movies/data/AdminMoviesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';

const AdminMoviesPage = () => {
  const [isAddingMovie, setIsAddingMovie] = useState<boolean>(false);

  const addMovieHandle = () => {
    setIsAddingMovie(true);
  };
  const cancelHandler = () => {
    setIsAddingMovie(false);
  };

  return (
    <div className="w-full overflow-y-scroll px-2">
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
      {!isAddingMovie && <AdminSearchBar />}
      {!isAddingMovie && <MoviesList />}
      <AnimatePresence>
        {isAddingMovie && <AddMovieForm cancelHandler={cancelHandler} />}
      </AnimatePresence>
    </div>
  );
};

export default AdminMoviesPage;
