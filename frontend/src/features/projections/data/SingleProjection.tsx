import { IProjection } from '../types';
import { publicUrl } from '../../../api/axios';
import { useNavigate } from 'react-router-dom';

type SingleProjectionProps = {
  projection: IProjection;
};

const SingleProjection = ({ projection }: SingleProjectionProps) => {
  const navigate = useNavigate();
  const reserveTicketHandler = (): void => {
    navigate(`/program/projection/${projection.id}`);
  };

  let movieImage = projection.movie.mainPhoto.startsWith('public')
    ? `${publicUrl}/${projection.movie.mainPhoto}`
    : `${projection.movie.mainPhoto}`;

  return (
    <li className="border border-slate-300 w-1/3 flex flex-col items-center max-w-[450px] rounded">
      <div className="flex flex-row gap-x-5 h-5/6">
        <div className="w-1/2">
          <img className="w-full h-full" src={movieImage} />
        </div>
        <div className="py-5 w-1/2">
          <div className="">
            <p>
              <strong className="mr-[5px]">Director</strong>
              {projection.movie.director}
            </p>
            <p>
              <strong className="mr-[5px]">Name</strong>
              {projection.movie.name}
            </p>
            <p>
              <strong className="mr-[5px]">Actors</strong>
              {projection.movie.actors}
            </p>
            <p>
              <strong className="mr-[5px]">Country</strong>
              {projection.movie.country}
            </p>
            <p>
              <strong className="mr-[5px]">Year</strong>
              {projection.movie.year}
            </p>
            <p>
              <strong className="mr-[5px]">Genre</strong>
              {projection.movie.genre}
            </p>
            <p>
              <strong className="mr-[5px]">Duration</strong>
              {projection.movie.duration}min
            </p>
          </div>
          <div className="mt-10">
            <div>
              <strong className="mr-[5px]">Showing Time:</strong>
              <p>
                {' '}
                {new Date(projection.showingTime).toLocaleDateString('fr-Fr', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
            <p>
              <strong className="mr-[5px]">Hall:</strong>
              {projection.hall.name}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center h-1/6">
        <button
          type="button"
          onClick={reserveTicketHandler}
          className="w-[80%] border border-slate-300 my-2 text-lg rounded hover:scale-110 duration-150"
        >
          Reserve Ticket
        </button>
      </div>
    </li>
  );
};

export default SingleProjection;
