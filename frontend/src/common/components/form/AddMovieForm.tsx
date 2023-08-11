import { useRef } from 'react';
import { useAddMovieMutation } from '../../../features/movies/api/movieApi';
const AddMovieForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [addMovie, { isError, error }] = useAddMovieMutation();
  const addMovieHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    addMovie(formData);
  };
  return (
    <form onSubmit={addMovieHandler} ref={formRef} className=" bg-white rounded text-slate-950 w-80">
      {isError && <p className="text-center text-red-700">{error!.message}</p>}
      <div className="flex flex-col px-2">
        <label htmlFor="title">Title:</label>
        <input placeholder="@example/The Godfather" className="log_reg_input" name="title" type="text" id="title" />
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="genre">Genre:</label>
        <input placeholder="@example/Crime, Drama" className="log_reg_input" name="genre" type="text" id="genre" />
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="year">Year:</label>
        <input placeholder="@example/1972" className="log_reg_input" name="year" type="number" id="year" />
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="actors">Actors:</label>
        <input
          placeholder="@example/Marlon Brando, Al Pacino"
          className="log_reg_input"
          name="actors"
          type="text"
          id="actors"
        />
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="director">Director</label>
        <input
          placeholder="@example/Francis Ford Cuppola"
          className="log_reg_input"
          name="director"
          type="text"
          id="director"
        />
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="duration">Duration</label>
        <input
          placeholder="@example/Francis Ford Cuppola"
          className="log_reg_input"
          name="duration"
          type="number"
          id="duration"
        />
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="description">Description:</label>
        <textarea
          placeholder="@example/Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger."
          className="log_reg_input"
          name="description"
          id="description"
        />
      </div>
      <div className="flex flex-col px-2">
        <label htmlFor="image">Image</label>
        <input name="image" type="file" id="image" accept="image/*" />
      </div>
      <div className="flex flex-row justify-center my-4">
        <button className="bg-blue-600 text-white px-2 py-1 rounded mb-2">Submit</button>
      </div>
    </form>
  );
};

export default AddMovieForm;
