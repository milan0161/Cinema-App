import { useAppDispatch } from '../../../app/store/store';

import { setProjectionId } from '../state/adminSlice';
import ReservationDate from './ReservationDate';

type ProjectionItemProps = {
  title: string;
  date: string;
  id: number;
  showReservations: () => void;
};

const ProjectionItem = ({
  date,
  id,
  title,
  showReservations,
}: ProjectionItemProps) => {
  const dispatch = useAppDispatch();

  const getReservationsHandler = () => {
    dispatch(setProjectionId(id));
    showReservations();
  };

  return (
    <li className="border border-slate-300 w-full flex flex-row px-4 py-2 items-center">
      <ReservationDate date={date} />
      <span className="flex-1">{title}</span>
      <button
        type="button"
        onClick={getReservationsHandler}
        className="border border-slate-300 px-2 py-1 hover:bg-slate-300 hover:text-black duration-150 font-bold"
      >
        Check Reservations
      </button>
    </li>
  );
};

export default ProjectionItem;
