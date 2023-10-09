import React, { useState } from 'react';
import { Movie } from '../types';
import ProjectionFrom from '../../../common/components/form/ProjectionFrom';
import SingleMovie from './SingleMovie';
import DropMenu from '../../../common/components/navigation/DropMenu';
import DropMenuItem from '../../../common/components/navigation/DropMenuItem';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../common/components/ui/Modal';
import { AnimatePresence } from 'framer-motion';
import EditMovieForm from '../../../common/components/form/EditMovieForm';

type SingleMovieProps = {
  movie: Movie;
};
const AdminSingleMovie = ({ movie }: SingleMovieProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const detailsHandler = () => {
    navigate('/movies/' + movie.id);
    setAnchorEl(null);
  };

  const projectionHandler = () => {
    setIsOpen(true);
    setAnchorEl(null);
  };

  const isEditHandler = () => {
    setIsOpen(false);
    setIsEdit(true);
    setAnchorEl(null);
  };

  return (
    <div className="border border-slate-300 rounded relative">
      <div className="text-right absolute right-1 z-10">
        <DropMenu
          className="text-green-500"
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          text="Options"
        >
          <DropMenuItem text="Edit Movie" handleClose={isEditHandler} />
          <DropMenuItem text="See Details" handleClose={detailsHandler} />
          <DropMenuItem
            text="Create Projection"
            handleClose={projectionHandler}
          />
        </DropMenu>
      </div>
      <SingleMovie movie={movie} showHover={false} />
      <AnimatePresence>
        {isOpen && !isEdit && (
          <Modal onClickBackdrop={() => setIsOpen(false)} className="">
            <ProjectionFrom movieId={movie.id} onClick={setIsOpen} />
          </Modal>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isOpen && isEdit && (
          <Modal
            onClickBackdrop={() => setIsEdit(false)}
            className="fixed w-full z-50 top-[20%]"
          >
            <EditMovieForm
              id={movie.id}
              cancelHandler={() => setIsEdit(false)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminSingleMovie;
