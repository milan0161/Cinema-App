import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/store/store';
import { ProjectionDetails, Seat } from '../types';
import TicketDetails from './TicketDetails';
import { useAddReservationMutation } from '../../reservations/api/reservationApi';

import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';
import { showSuccess } from '../../../app/utils/ToastMsg';
import { QueryDefinition, BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { QueryActionCreatorResult } from '@reduxjs/toolkit/dist/query/core/buildInitiate';
import { AxiosRequestConfig, AxiosError } from 'axios';

type ReservationDetailsProps = {
  selectedSeats: Seat[];
  price: number | undefined;
  projectionId: number | undefined;
  setSelectedSeats: React.Dispatch<React.SetStateAction<Seat[]>>;
  refetch: () => QueryActionCreatorResult<
    QueryDefinition<
      number,
      BaseQueryFn<AxiosRequestConfig<any>, unknown, AxiosError<unknown, any>>,
      'MOVIES' | 'Projections' | 'Reservations',
      ProjectionDetails,
      'api'
    >
  >;
};

const ReservationDetails = ({
  selectedSeats,
  price,
  projectionId,
  setSelectedSeats,
  refetch,
}: ReservationDetailsProps) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isAuth);
  const [addReservation, { isLoading, isError, error, isSuccess }] =
    useAddReservationMutation();

  const navigate = useNavigate();

  const reservationHandler = () => {
    if (!isLoggedIn) {
      return navigate('/auth?mode=login');
    }

    addReservation({
      seatsNumber: selectedSeats.map((x) => x.number),
      projectionId: projectionId!,
    })
      .unwrap()
      .then(() => {
        setSelectedSeats([]);
        refetch();
        showSuccess('You have successfully reserved your seats.');
      });
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="border border-slate-300 w-[500px] px-3 py-2">
      <h2 className="text-center mt-2">Your Reservation Details</h2>
      {isError && <p className="text-center text-red">{error?.message}</p>}
      <TicketDetails selectedSeats={selectedSeats} price={price} />
      <button
        onClick={reservationHandler}
        type="button"
        className="w-full border m-auto border-slate-300 hover:border-slate-100 hover:scale-105 duration-200"
      >
        Submit Reservation
      </button>
    </div>
  );
};

export default ReservationDetails;
