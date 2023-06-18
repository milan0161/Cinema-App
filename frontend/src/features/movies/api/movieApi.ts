import { apiSlice } from '../../../app/api/apiSlice';
import { Movie } from '../types';

const movieApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addMovie: builder.mutation({
      query: (data) => ({
        url: 'movie/create',
        method: 'POST',
        headers: { Authorization: true },
        data,
      }),
      invalidatesTags: ['MOVIES'],
    }),
    getMovies: builder.query<{ movies: Movie[] }, void>({
      query: () => ({
        url: 'movie/get-all',
        method: 'GET',
      }),
      providesTags: ['MOVIES'],
    }),
  }),
});

export const { useAddMovieMutation, useGetMoviesQuery } = movieApi;
