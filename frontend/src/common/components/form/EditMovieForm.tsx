import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { EditMovie } from '../../../features/movies/types';
import {
  useEditMovieMutation,
  useGetSingleMovieQuery,
} from '../../../features/movies/api/movieApi';

import LoadingIndicator from '../ui/LoadingIndicator';

type EditMovieProps = {
  id: number;
  cancelHandler: () => void;
};

const EditMovieForm = ({ id, cancelHandler }: EditMovieProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [editMovie, { isError, isLoading, error }] = useEditMovieMutation();
  const { data: movie, isFetching } = useGetSingleMovieQuery(id);

  const { register, formState, reset, handleSubmit } = useForm<EditMovie>({
    mode: 'onBlur',
  });
  const { errors, isValid } = formState;
  const editMovieHandler = (data: EditMovie) => {
    editMovie({ ...data, id: movie!.id })
      .unwrap()
      .then((data) => {
        cancelHandler();
      });
  };
  if (isFetching) {
    return <LoadingIndicator />;
  }
  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      onSubmit={handleSubmit(editMovieHandler)}
      ref={formRef}
      className=" bg-white rounded text-slate-950 lg:w-2/3 2xl:w-1/2 m-auto"
    >
      {isError && <p className="text-center text-red-700">{error!.message}</p>}
      <h2 className="text-center p-5 text-slate-600">Edit Movie</h2>
      <div className="flex flex-col px-2">
        <label htmlFor="name">Name:</label>
        <input
          defaultValue={movie?.name}
          placeholder="@example/The Godfather"
          className={
            errors.name ? 'log_reg_input validation_invalid' : 'log_reg_input'
          }
          {...register('name', {
            required: 'Name must be provided',
          })}
          // name="name"
          type="text"
          id="name"
        />
        {errors.name && (
          <p className="validation_error">{errors.name?.message}</p>
        )}
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="country">Country:</label>
        <input
          defaultValue={movie?.country}
          placeholder="@example/USD, Canada"
          className={
            errors.country
              ? 'log_reg_input validation_invalid'
              : 'log_reg_input'
          }
          {...register('country', {
            required: 'Country must be provided',
          })}
          type="text"
          id="country"
        />
        {errors.country && (
          <p className="validation_error">{errors.country?.message}</p>
        )}
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="genre">Genre:</label>
        <input
          defaultValue={movie?.genre}
          placeholder="@example/Crime, Drama"
          className={
            errors.genre ? 'log_reg_input validation_invalid' : 'log_reg_input'
          }
          {...register('genre', {
            required: 'Genre must be provided',
          })}
          // name="genre"
          type="text"
          id="genre"
        />
        {errors.genre && (
          <p className="validation_error">{errors.genre?.message}</p>
        )}
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="year">Year:</label>
        <input
          defaultValue={movie?.year}
          placeholder="@example/1972"
          className={
            errors.year ? 'log_reg_input validation_invalid' : 'log_reg_input'
          }
          {...register('year', {
            required: 'Year must be provided',
          })}
          // name="year"
          type="number"
          id="year"
        />
        {errors.year && (
          <p className="validation_error">{errors.year?.message}</p>
        )}
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="actors">Actors:</label>
        <input
          defaultValue={movie?.actors}
          placeholder="@example/Marlon Brando, Al Pacino"
          className={
            errors.actors ? 'log_reg_input validation_invalid' : 'log_reg_input'
          }
          {...register('actors', {
            required: 'Actors must be provided',
          })}
          // name="actors"
          type="text"
          id="actors"
        />
        {errors.actors && (
          <p className="validation_error">{errors.actors?.message}</p>
        )}
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="director">Director</label>
        <input
          defaultValue={movie?.director}
          placeholder="@example/Francis Ford Coppola"
          className={
            errors.director
              ? 'log_reg_input validation_invalid'
              : 'log_reg_input'
          }
          {...register('director', {
            required: 'Director must be provided',
          })}
          // name="director"
          type="text"
          id="director"
        />
        {errors.director && (
          <p className="validation_error">{errors.director?.message}</p>
        )}
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="duration">Duration</label>
        <input
          defaultValue={movie?.duration}
          placeholder="@example/175"
          className={
            errors.duration
              ? 'log_reg_input validation_invalid'
              : 'log_reg_input'
          }
          // name="duration"
          {...register('duration', {
            required: 'Duration must be provided',
          })}
          type="number"
          id="duration"
        />
        {errors.duration && (
          <p className="validation_error">{errors.duration?.message}</p>
        )}
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="description">Description:</label>
        <textarea
          defaultValue={movie?.description}
          placeholder="@example/Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger."
          className={
            errors.description
              ? 'log_reg_input validation_invalid'
              : 'log_reg_input'
          }
          {...register('description', {
            required: 'Description must be provided',
          })}
          // name="description"
          id="description"
        />
        {errors.description && (
          <p className="validation_error">{errors.description?.message}</p>
        )}
      </div>
      <div className="flex flex-row justify-center my-4 gap-5">
        <button
          type="submit"
          className="bg-blue-600 text-white w-1/4 px-2 py-1 rounded mb-2"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={cancelHandler}
          className="bg-orange-600 w-1/4 text-white px-2 py-1 rounded mb-2"
        >
          Cancel
        </button>
      </div>
    </motion.form>
  );
};

export default EditMovieForm;
