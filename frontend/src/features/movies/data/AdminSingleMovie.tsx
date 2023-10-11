import React, { useState } from 'react';
import { Movie } from '../types';
import ProjectionFrom from '../../../common/components/form/ProjectionFrom';
import SingleMovie from './SingleMovie';
import DropMenu from '../../../common/components/navigation/DropMenu';
import DropMenuItem from '../../../common/components/navigation/DropMenuItem';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../common/components/ui/Modal';
import { AnimatePresence, motion } from 'framer-motion';
import EditMovieForm from '../../../common/components/form/EditMovieForm';

type SingleMovieProps = {
  movie: Movie;
  i: number;
};
const AdminSingleMovie = ({
  movie,
  i,
}: SingleMovieProps): React.JSX.Element => {
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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: i * 0.03 }}
      className="border border-slate-300 rounded relative"
    >
      <div className="text-right absolute right-1 z-10 top-1">
        <DropMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} text="Options">
          <DropMenuItem text="Edit Movie" handleClose={isEditHandler} />
          <DropMenuItem text="See Details" handleClose={detailsHandler} />
          <DropMenuItem
            text="Create Projection"
            handleClose={projectionHandler}
          />
        </DropMenu>
      </div>
      <SingleMovie i={i} movie={movie} showHover={false} />
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
    </motion.div>
  );
};
export default AdminSingleMovie;
