import { motion } from 'framer-motion';
import { useAddCoverPhotoMutation } from '../../../features/movies/api/movieApi';
import LoadingIndicator from '../ui/LoadingIndicator';
import { useRef } from 'react';

type AddCoverPhotoFormProps = {
  cancelHandler: () => void;
  movieId: string | number;
};

const AddCoverPhotoForm = ({
  cancelHandler,
  movieId,
}: AddCoverPhotoFormProps) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const [addCoverPhoto, { isLoading, isError, error }] =
    useAddCoverPhotoMutation();

  const addCoverPhotoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', fileRef!.current!.files![0]);
    let file: any;
    file = formData.get('file');
    // formData.forEach((e) => (file = e));
    addCoverPhoto({ file: file, movieId: movieId });
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <motion.form
      onSubmit={addCoverPhotoHandler}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="bg-white rounded text-slate-950 w-1/4 m-auto p-2"
    >
      {isError && <p className="text-center text-red-700">{error!.message}</p>}
      <h2 className="text-center text-slate-600 p-5">Add Cover Photo</h2>
      <div className="flex flex-col px-2 w-1/2 m-auto gap-y-2">
        <label htmlFor="coverPhoto">Chose cover photo:</label>
        <input
          ref={fileRef}
          type="file"
          name="file"
          id="coverPhoto"
          accept="image/*"
        />
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
export default AddCoverPhotoForm;
