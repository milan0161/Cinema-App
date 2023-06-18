import Backdrop from '../ui/Backdrop';
import { useEffect, useRef } from 'react';
import { useAddProjectionMutation } from '../../../features/projections/api/projectionsApi';

type ProjectionFormProps = {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  movieId: string;
};

const ProjectionFrom = ({ onClick, movieId }: ProjectionFormProps): React.JSX.Element => {
  const [addProjectio, { isSuccess, isError, error }] = useAddProjectionMutation();

  const hallRef = useRef<HTMLSelectElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);

  const addProjectionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hallRef.current!.value.trim.length < 3 && !timeRef.current!.value) {
      return;
    }
    addProjectio({ id: movieId, date: timeRef.current!.value, hallName: hallRef.current!.value });
  };

  useEffect(() => {
    if (isSuccess) {
      onClick(false);
    }
  }, [isSuccess]);
  return (
    <div>
      <Backdrop onClick={onClick} />
      <form
        onSubmit={addProjectionHandler}
        className="fixed top-[30vh] left-[35%] z-50 w-1/3 h-1/3 border border-slate-300 flex flex-col justify-center gap-y-10 px-4 bg-slate-800"
      >
        {isError && <p className="text-center text-red-600">{error?.message}</p>}
        <div className="flex flex-col ">
          <label htmlFor="">Hall</label>
          <select ref={hallRef} className="rounded text-black p-1">
            <option value={1}>Pick Hall</option>
            <option value={'Hall One'}>Hall One</option>
          </select>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="date">Date & Time:</label>
          <input ref={timeRef} className="rounded text-black p-1" type="datetime-local" id="date" />
        </div>
        <button className="border border-slate-300 hover:scale-105 duration-100">Create</button>
      </form>
    </div>
  );
};

export default ProjectionFrom;
