import ReservationDate from './ReservationDate';

type ReservationitemProps = {
  reservation: Reservation;
};

const ReservationItem = ({ reservation }: ReservationitemProps) => {
  return (
    <li className="border border-slate-300 px-4 py-4 flex justify-between items-center">
      <p>{reservation.userName}</p>
      <p>{reservation.movieName}</p>
      <div>
        <strong>seats: </strong>
        {reservation.seats.map((s, index) => {
          let text = reservation.seats.length - 1 === index ? s : `${s}, `;
          return <span key={s}>{text}</span>;
        })}
      </div>
      <p>{<ReservationDate date={reservation.showingTime} />}</p>
      <form
        id="edit_reservation"
        className="flex items-center justify-center gap-5"
      >
        <p>Reservation Status</p>
        <div className="flex gap-2">
          <div className="flex flex-col items-center gap-1">
            <label htmlFor="">Taken</label>
            <input className="w-5 h-5" name="radioBtn" type="radio" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <label htmlFor="">Canceled</label>
            <input className="w-5 h-5" name="radioBtn" type="radio" />
          </div>
        </div>
      </form>
    </li>
  );
};

export default ReservationItem;
