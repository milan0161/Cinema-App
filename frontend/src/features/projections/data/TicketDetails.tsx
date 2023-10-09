import { Seat } from '../types';

type TicketDetailsProps = {
  price: number | undefined;
  selectedSeats: Seat[];
};

const TicketDetails = ({ price, selectedSeats }: TicketDetailsProps) => {
  return (
    <div className="my-4">
      <div>
        <strong>Seats: </strong>
        {selectedSeats &&
          selectedSeats.map((seat) => {
            return (
              <p className="inline-block" key={seat.id}>
                {seat.number},
              </p>
            );
          })}
      </div>
      <p>
        <strong>Price per seat: {price}$ </strong>
      </p>
      <p>
        <strong>Total Price: </strong>
        {selectedSeats && selectedSeats.length * price!}$
      </p>
    </div>
  );
};

export default TicketDetails;
