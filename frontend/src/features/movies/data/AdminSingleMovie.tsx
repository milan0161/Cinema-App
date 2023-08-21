import React, { useState } from 'react';
import { Movie } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import ProjectionFrom from '../../../common/components/form/ProjectionFrom';
type SingleMovieProps = {
  movie: Movie;
};
const AdminSingleMovie = ({ movie }: SingleMovieProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const addProjectionHandler = () => {
    setIsOpen(true);
  };
  const publicUrl = import.meta.env.VITE_REACT_APP_BASE_PUBLIC_URL;

  return (
    <li className="flex flex-col border mt-10 border-slate-300 rounded w-[500px] h-[350px] p-2">
      {isOpen && <ProjectionFrom movieId={movie.id} onClick={setIsOpen} />}
      <div className="grid grid-col-9 gap-x-4">
        <h2 className="col-start-1 col-span-8 text-center">{movie.title}</h2>
        <button
          onClick={addProjectionHandler}
          className="col-start-9 border w-12 h-8 border-slate-300 rounded hover:scale-105 duration-200"
        >
          <FontAwesomeIcon icon={faDiagramProject} />
        </button>
      </div>
      <div className="flex flex-row my-2">
        <div className="w-[200px] h-full">
          <img
            className="w-32 m-auto"
            src={`${publicUrl}${movie.mainPhoto}`}
            alt={movie.title}
          />
        </div>
        <div className="flex flex-col gap-2 justify-center ">
          <p>
            <span className="span_bold">Year:</span> {movie.year}
          </p>
          <p>
            <span className="span_bold">Duration:</span> {movie.duration}min
          </p>
          <p>
            <span className="span_bold">Genre:</span> {movie.genre}
          </p>
          <p>
            <span className="span_bold">Actors:</span>
            {movie.actors}
          </p>
          <p>
            <span className="span_bold">Director:</span>
            {movie.director}
          </p>
        </div>
      </div>
      <p className="">{movie.description}</p>
    </li>
  );
};

export default AdminSingleMovie;
