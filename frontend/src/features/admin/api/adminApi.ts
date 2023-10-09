import { apiSlice } from '../../../app/api/apiSlice';
import { ProjectionDetails } from '../../projections/types';

const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardInfo: builder.query<DashboardInfo, void>({
      query: () => ({
        url: 'admin',
        method: 'GET',
      }),
    }),
    getUsersList: builder.query<string[], void>({
      query: () => ({
        url: 'admin/get-users-list',
        method: 'GET',
      }),
    }),
    getReservationsByEmail: builder.query<Reservation[], string>({
      query: (email) => ({
        url: `admin/get-reservation-by-email/${email}`,
        method: 'GET',
      }),
    }),
    getReservationsByProjection: builder.query<Reservation[], number>({
      query: (id) => ({
        url: `admin/get-reservations-for-projection/${id}`,
      }),
    }),
  }),
});

export const {
  useGetDashboardInfoQuery,
  useGetUsersListQuery,
  useGetReservationsByEmailQuery,
  useGetReservationsByProjectionQuery,
} = adminApi;
