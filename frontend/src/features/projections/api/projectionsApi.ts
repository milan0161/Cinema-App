import { apiSlice } from '../../../app/api/apiSlice';
import { CreateProjectionRequest, CreateProjectionResponse, IProjections } from '../types';

const projectionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProjection: builder.mutation<CreateProjectionResponse, CreateProjectionRequest>({
      query: ({ id, date, hallName }) => ({
        url: `projection/create/${id}`,
        method: 'POST',
        data: { date, hallName },
      }),
      invalidatesTags: ['Projections'],
    }),
    getProjections: builder.query<IProjections, string | void>({
      query: (date) => ({
        url: `projection/get-all?date=${date}`,
      }),
      providesTags: ['Projections'],
    }),
  }),
});

export const { useAddProjectionMutation, useGetProjectionsQuery } = projectionApi;
