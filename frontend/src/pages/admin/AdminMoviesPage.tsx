// import { useState } from 'react';
import AdminSearchBar from '../../common/components/admin/AdminSearchBar';
import AddMovieForm from '../../common/components/form/AddMovieForm';
import MoviesList from '../../features/movies/data/AdminMoviesList';

const AdminMoviesPage = () => {
  // const [formIsVisible, setFormIsVisible] = useState<boolean>(true);
  return (
    <div className="w-full grid grid-cols-7 h-[75vh]">
      <div className="col-start-1 col-end-6 overflow-auto">
        <h2 className="text-center p-2 text-2xl font-bold border-b-2">Movie List</h2>
        <AdminSearchBar />
        <MoviesList />
      </div>
      <div className="col-start-6 col-span-2 flex flex-col items-center">
        <h2 className="text-2xl p-2 mb-10 mt-5">Add Movie</h2>
        <AddMovieForm />
      </div>
    </div>
  );
};

export default AdminMoviesPage;
