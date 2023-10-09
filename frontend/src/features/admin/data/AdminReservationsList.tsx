import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';
import ReservationItem from './ReservationItem';

type AdminReservationListProps = {
  reservations: Reservation[];
  loading: boolean;
};

const AdminReservationsList = ({
  reservations,
  loading,
}: AdminReservationListProps) => {
  if (loading) {
    return <LoadingIndicator />;
  }
  return (
    <>
      {/* <button className="border border-slate-300 px-2">Submit</button> */}
      <ul>
        {reservations.map((res) => {
          return <ReservationItem reservation={res} key={res.id} />;
        })}
      </ul>
    </>
  );
};

export default AdminReservationsList;
