import ChairIcon from '@mui/icons-material/Chair';
import { Seat } from '../types';

type SeatProps = {
  seat: Seat;
  onSelectSeat: (seat: Seat) => void;
  selected: Boolean;
};

const SingleSeat = ({ seat, onSelectSeat, selected }: SeatProps) => {
  const onSelectSeatHeandler = () => {
    onSelectSeat(seat);
  };

  return (
    <li className={`cursor-pointer ${!seat.available ? 'text-red-500' : ''} `}>
      <button
        disabled={!seat.available}
        type="button"
        onClick={onSelectSeatHeandler}
        className="disabled:text-red-500"
      >
        <ChairIcon
          className={`${seat.available ? 'hover:text-green-500' : ''} ${
            selected ? 'text-blue-600' : ''
          }`}
        />
      </button>
    </li>
  );
};

export default SingleSeat;
