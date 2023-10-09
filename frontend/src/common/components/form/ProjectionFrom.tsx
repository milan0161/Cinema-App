import { useAddProjectionMutation } from '../../../features/projections/api/projectionsApi';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
type ProjectionFormProps = {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  movieId: number;
};

type ProjectionFormvalues = {
  hallName: string;
  ticketPrice: number;
  showingTime: string;
};

const ProjectionFrom = ({
  movieId,
  onClick,
}: ProjectionFormProps): React.JSX.Element => {
  const [addProjection, { isSuccess, isError, error }] =
    useAddProjectionMutation();

  const { register, handleSubmit, formState } = useForm<ProjectionFormvalues>();
  const { errors, isValid } = formState;
  const addProjectionHandler = (data: ProjectionFormvalues) => {
    if (!isValid) return;

    addProjection({
      showingTime: new Date(data.showingTime).toISOString(),
      hallName: data.hallName,
      movieId,
      ticketPrice: data.ticketPrice,
    })
      .unwrap()
      .then((data) => {
        if (data) {
          onClick(false);
        }
      })
      .catch();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      onSubmit={handleSubmit(addProjectionHandler)}
      className="fixed top-[30vh] left-[35%] z-50 w-1/3 border border-slate-300 flex flex-col justify-center gap-y-10 px-4 bg-slate-800 py-5"
    >
      {isError && <p className="text-center text-red-600">{error?.message}</p>}
      <div className="flex flex-col ">
        <label htmlFor="">Hall</label>
        <select
          {...register('hallName', {
            required: 'You must chose Hall',
          })}
          className="rounded text-black p-1"
          defaultValue={'MainHall'}
        >
          <option value={'MainHall'}>Main Hall</option>
          <option value={'SideHall'}>Side Hall</option>
        </select>
        {errors.hallName && (
          <p className="validation_error">{errors.hallName?.message}</p>
        )}
      </div>
      <div className="flex flex-col ">
        <label htmlFor="date">Date & Time:</label>
        <input
          {...register('showingTime', {
            required: 'Showing time must be provided',
            validate: (input) => {
              const inputDate = new Date(input).getTime();
              const dateNow = new Date().getTime();
              if (inputDate < dateNow)
                return 'You can not chose past time to create projection';
            },
          })}
          className="rounded text-black p-1"
          type="datetime-local"
          id="date"
        />
        {errors.showingTime && (
          <p className="validation_error">{errors.showingTime?.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label>Ticket Price: </label>
        <input
          {...register('ticketPrice', {
            required: 'You must enter ticket price',
          })}
          type="number"
          className="rounded text-black p-1"
          placeholder="Ticket price is expressed in dollars"
        />
        {errors.ticketPrice && (
          <p className="validation_error">{errors.ticketPrice?.message}</p>
        )}
      </div>
      <button className="border border-slate-300 hover:scale-105 duration-100">
        Create
      </button>
    </motion.form>
  );
};

export default ProjectionFrom;
