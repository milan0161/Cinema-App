import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';
import {
  AddCoverPhoto,
  EditMovie,
  Images,
  Movie,
  PaginationResponse,
  SearchMovies,
} from '../types';

const initialSearchTerm: SearchMovies = {
  searchTerm: '',
  pageSize: 10,
  pageNumber: 1,
};

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
    getMovies: builder.query<PaginationResponse<Movie[]>, SearchMovies | void>({
      query: ({
        searchTerm,
        pageNumber,
        pageSize,
      }: SearchMovies = initialSearchTerm) => ({
        url: 'movie',
        params: { searchTerm: searchTerm, pageSize, pageNumber },
        method: 'GET',
        transformResponse: (responseData) => {
          console.log(responseData);
          return movieAdapter.setAll(initialState, responseData);
        },
      }),
      providesTags: (response) =>
        response?.data
          ? [
              ...response.data.map(({ id }) => ({
                type: 'MOVIES' as const,
                id,
              })),
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
    addCoverPhoto: builder.mutation<void, AddCoverPhoto>({
      query: ({ movieId, ...data }) => ({
        url: '/movie/add-cover-photo/' + movieId,
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: data,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'MOVIES', id: arg.movieId },
      ],
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
  useAddCoverPhotoMutation,
} = movieApi;
//Vrati se posle da sredis ovo s paginaciju
// const selectMovieResult = movieApi.endpoints.getMovies.select({
//   searchTerm: '',
// });

// export const selectMovieData = createSelector(
//   selectMovieResult,
//   (movieResult) => movieResult.data,
// );

// export const { selectAll: selectAllMovies } = movieAdapter.getSelectors(
//   (state) => selectMovieData(state) ?? initialState,
// );
