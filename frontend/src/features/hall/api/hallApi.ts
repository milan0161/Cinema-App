import { apiSlice } from '../../../app/api/apiSlice';

const hallApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHalls: builder.query<Hall[], void>({
      query: () => ({
        url: 'hall',
      }),
    }),
  }),
});

export const { useGetHallsQuery } = hallApi;
