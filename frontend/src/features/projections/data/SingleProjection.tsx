import React from 'react';
import { Movie } from '../../movies/types';

interface SingleProjProps {
  projection: { movie: Movie; projections: Date[] };
}

const SingleProjection = ({ projection }: SingleProjProps): React.JSX.Element => {
  const publicUrl = import.meta.env.VITE_REACT_APP_BASE_PUBLIC_URL;
  return (
    <li className="border border-slate-300 rounded w-[500px] h-[350px] p-2 mt-4">
      <h2 className="text-center">{projection.movie.title}</h2>
      <div className="flex flex-row gap-4 my-2">
        <div className="w-[150px] h-[200px]">
          <img className="w-full h-full" src={`${publicUrl}${projection.movie.image}`} alt={projection.movie.title} />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <p>
            <span className="span_bold">Year:</span> {projection.movie.year}
          </p>
          <p>
            <span className="span_bold">Genre:</span> {projection.movie.genre}
          </p>
          <p>
            <span className="span_bold">Actors:</span>
            {projection.movie.actors}
          </p>
          <p>
            <span className="span_bold">Director:</span>
            {projection.movie.director}
          </p>
        </div>
      </div>
      <div className=" mt-4 flex flex-row gap-x-4">
        {projection.projections.map((p, i) => (
          <div className="border border-slate-300 w-16 text-center" key={i}>
            {new Date(p).toLocaleTimeString('fr-Fr', { minute: '2-digit', hour: '2-digit' })}h
          </div>
        ))}
      </div>
    </li>
  );
};

export default SingleProjection;
