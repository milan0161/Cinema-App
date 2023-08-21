import { apiSlice } from '../../../app/api/apiSlice';
import { Images, Movie } from '../types';

const movieApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addMovie: builder.mutation<void, Movie>({
      query: (data) => ({
        url: 'movie/add-movie',
        method: 'POST',
        headers: { Authorization: true },
        data,
      }),
      invalidatesTags: ['MOVIES'],
    }),
    getMovies: builder.query<Movie[], void>({
      query: () => ({
        url: 'movie',
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
    getSingleMovie: builder.query<Movie, number>({
      query: (id) => ({
        url: `/movie/get-single-movie/${id}`,
      }),
    }),
  }),
});

export const {
  useAddMovieMutation,
  useGetMoviesQuery,
  useGetImagesQuery,
  useGetSingleMovieQuery,
} = movieApi;
