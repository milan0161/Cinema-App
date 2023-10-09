import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';
import { EditMovie, Images, Movie } from '../types';

const movieAdapter = createEntityAdapter<Movie>({
  selectId: (movie) => movie.id,
});

const initialState = movieAdapter.getInitialState();

const movieApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addMovie: builder.mutation<void, Movie>({
      query: (data) => ({
        url: 'movie/add-movie',
        method: 'POST',
        headers: { Authorization: true },
        data,
      }),
      invalidatesTags: [{ type: 'MOVIES', id: 'LIST' }],
    }),
    getMovies: builder.query<Movie[], void>({
      query: () => ({
        url: 'movie',
        method: 'GET',
        transformResponse: (responseData) => {
          return movieAdapter.setAll(initialState, responseData);
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'MOVIES' as const, id })),
              { type: 'MOVIES', id: 'LIST' },
            ]
          : [{ type: 'MOVIES', id: 'LIST' }],
    }),
    editMovie: builder.mutation<void, EditMovie>({
      query: ({ id, ...data }) => ({
        url: '/movie/edit-movie/' + id,
        method: 'PUT',
        data: data,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'MOVIES', id: arg.id }],
    }),
    getImages: builder.query<Images, void>({
      query: () => ({
        url: '/movie/get-pictures',
        method: 'GET',
      }),
    }),
    getSingleMovie: builder.query<Movie, number>({
      query: (id) => ({
        url: `/movie/get-single-movie/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: 'MOVIES', id }],
    }),
    getFiveMovieImages: builder.query<string[], void>({
      query: () => ({
        url: '/movie/get-movie-images',
      }),
    }),
  }),
});

export const {
  useAddMovieMutation,
  useGetMoviesQuery,
  useGetImagesQuery,
  useGetSingleMovieQuery,
  useEditMovieMutation,
  useGetFiveMovieImagesQuery,
} = movieApi;

const selectMovieResult = movieApi.endpoints.getMovies.select();

export const selectMovieData = createSelector(
  selectMovieResult,
  (movieResult) => movieResult.data,
);

// export const { selectAll: selectAllMovies } = movieAdapter.getSelectors(
//   (state) => selectMovieData(state) ?? initialState,
// );
