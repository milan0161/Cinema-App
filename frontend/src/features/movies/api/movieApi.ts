import { apiSlice } from '../../../app/api/apiSlice';
import { Images, Movie } from '../types';

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
    getImages: builder.query<Images, void>({
      query: () => ({
        url: '/movie/get-pictures',
        method: 'GET',
      }),
    }),
    getSingleMovie: builder.query<{ movie: Movie }, string>({
      query: (id) => ({
        url: `/movie/get-single-movie/${id}`,
      }),
    }),
  }),
});

export const { useAddMovieMutation, useGetMoviesQuery, useGetImagesQuery, useGetSingleMovieQuery } = movieApi;
