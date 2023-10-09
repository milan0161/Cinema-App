import { apiSlice } from '../../../app/api/apiSlice';

const reservationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addReservation: builder.mutation<void, AddReservation>({
      query: (data) => ({
        url: 'reservation',
        method: 'POST',
        data,
      }),
      invalidatesTags: [
        { type: 'Reservations', id: 'LIST' },
        { type: 'Projections', id: 'LIST' },
      ],
    }),
  }),
});

export const { useAddReservationMutation } = reservationApi;
