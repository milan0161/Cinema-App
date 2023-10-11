import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Movie } from '../types';
const publicUrl = import.meta.env.VITE_REACT_APP_BASE_PUBLIC_URL;

type SingleMovieProps = {
  movie: Movie;
  i: number;

  showHover: boolean;
};
const SingleMovie = ({ movie, showHover, i }: SingleMovieProps) => {
  let movieImage = movie.mainPhoto?.startsWith('public')
    ? `${publicUrl}/${movie.mainPhoto}`
    : `${movie.mainPhoto}`;
  const navigate = useNavigate();
  const clickHandler = (): void => {
    navigate(`${movie.id}`);
  };
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.03, delay: i * 0.03 }}
      className="w-full h-[350px] relative col-span-1 single_movie border border-slate-400 flex  justify-center transition duration-300"
    >
      <img className="h-full transition duration-300" src={movieImage} alt="" />
      {showHover && (
        <button
          onClick={clickHandler}
          className="absolute top-[60%] left-18 invisible border border-slate-50 py-1 px-2 rounded"
        >
          Find out more
          {/* <Link className="text-white" to={`${movie.id}`}>
          Find out more
        </Link> */}
        </button>
      )}
      <h2 className="absolute top-10 text-center w-full z-1 invisible">
        {movie.name}
      </h2>
    </motion.li>
  );
};

export default SingleMovie;
