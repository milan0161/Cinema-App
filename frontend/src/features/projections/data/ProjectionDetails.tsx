import { useState } from 'react';
import { useGetProjectionQuery } from '../api/projectionsApi';
import SingleSeat from './Seat';
import { Seat } from '../types';
import ReservationDetails from './ReservationDetails';
import ProjectionTime from './ProjectionTime';
import ProjectionMovie from './ProjectionMovie';
import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';

type ProjectionDetailsProps = {
  id: string;
};

const ProjectionDetails = ({ id }: ProjectionDetailsProps) => {
  const { data, isLoading } = useGetProjectionQuery(+id);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const selectSeatHandler = (seat: Seat) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seat)) {
        return prev.filter((s) => s.id !== seat.id);
      } else {
        return [...prev, seat];
      }
    });
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }
  console.log(data);
  return (
    <>
      <h1 className="text-center mt-4">
        <ProjectionTime showingTime={data?.showingTime} />
        <span> In {data?.hall.name}</span>
      </h1>
      <div className="w-full flex flex-row">
        <div className="flex flex-col mt-10  gap-y-4 flex-1">
          <ReservationDetails
            price={data?.ticketPrice}
            selectedSeats={selectedSeats}
            projectionId={data?.id}
            setSelectedSeats={setSelectedSeats}
          />
          <ul className="flex flex-wrap w-[500px] max-h-[150px] justify-center">
            {data?.seats.map((seat) => {
              return (
                <SingleSeat
                  selected={selectedSeats.includes(seat)}
                  onSelectSeat={selectSeatHandler}
                  seat={seat}
                  key={seat.id}
                />
              );
            })}
          </ul>
        </div>
        <ProjectionMovie movie={data?.movie} />
      </div>
    </>
  );
};

export default ProjectionDetails;
