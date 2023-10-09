import { apiSlice } from '../../../app/api/apiSlice';
import {
  CreateProjectionRequest,
  CreateProjectionResponse,
  EditProjection,
  IProjection,
  ProjectionDetails,
} from '../types';

const projectionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProjection: builder.mutation<
      CreateProjectionResponse,
      CreateProjectionRequest
    >({
      query: ({ movieId, showingTime, hallName, ticketPrice }) => ({
        url: `projection/add-new-projection`,
        method: 'POST',
        data: { showingTime, hallName, movieId, ticketPrice },
      }),
      invalidatesTags: [{ type: 'Projections', id: 'LIST' }],
    }),
    getProjections: builder.query<IProjection[], string | void>({
      query: (date) => ({
        url: `projection/get-projections-by-date?date=${date}`,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Projections' as const, id })),
              { type: 'Projections', id: 'LIST' },
            ]
          : [{ type: 'Projections', id: 'LIST' }],
    }),
    getProjection: builder.query<ProjectionDetails, number>({
      query: (id) => ({
        url: `projection/get-single-projection/${id}`,
      }),
      transformResponse(response: ProjectionDetails, meta, args) {
        const orderSeats = response.seats.sort(
          (n1, n2) => n2.number - n1.number,
        );
        return { ...response, seats: orderSeats };
      },
      providesTags: (result, error, id) => [{ type: 'Projections', id }],
    }),
    getAllProjections: builder.query<IProjection[], void>({
      query: () => ({
        url: 'projection/get-projections',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Projections' as const, id })),
              { type: 'Projections', id: 'LIST' },
            ]
          : [{ type: 'Projections', id: 'LIST' }],
    }),
    editProjection: builder.mutation<IProjection, EditProjection>({
      query: ({ id, ...data }) => ({
        url: `projection/edit-projection/${id}`,
        method: 'PATCH',
        data: data,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Projections', id: arg.id },
      ],
    }),
    deleteProjection: builder.mutation<void, number>({
      query: (id) => ({
        url: `projection/delete-projection/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Projections'],
    }),
    getNewProjections: builder.query<IProjection[], void>({
      query: () => ({
        url: 'projection/get-new',
      }),
      providesTags: ['Projections'],
    }),
  }),
});

export const {
  useAddProjectionMutation,
  useGetProjectionsQuery,
  useGetProjectionQuery,
  useGetAllProjectionsQuery,
  useEditProjectionMutation,
  useDeleteProjectionMutation,
  useGetNewProjectionsQuery,
} = projectionApi;
