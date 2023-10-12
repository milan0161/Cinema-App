import { useForm } from 'react-hook-form';
import {
  EditProjection,
  IProjection,
} from '../../../features/projections/types';
import { useEditProjectionMutation } from '../../../features/projections/api/projectionsApi';
import LoadingIndicator from '../ui/LoadingIndicator';
import { showSuccess } from '../../../app/utils/ToastMsg';
import ErrorBlock from '../ui/ErrorBlock';
import { motion } from 'framer-motion';
import ReservationDate from '../../../features/admin/data/ReservationDate';

type EditProjectionFormProps = {
  projection: IProjection | null;
  showEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditProjectionForm = ({
  projection,
  showEdit,
}: EditProjectionFormProps) => {
  const { register, handleSubmit } = useForm<EditProjection>({
    defaultValues: {
      showingTime: projection!.showingTime,
      ticketPrice: projection?.ticketPrice,
    },
  });

  const [editProjection, { isLoading, isError, error, isSuccess }] =
    useEditProjectionMutation();

  const editProjectionHandler = (data: EditProjection) => {
    editProjection({
      id: projection!.id,
      hallName: data.hallName,
      showingTime: data.showingTime,
      ticketPrice: data.ticketPrice,
    });
  };
  if (isSuccess) {
    showSuccess('You have successfully updated the projection');
    showEdit(false);
  }
  // useEffect(() => {}, [])
  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <>
      {isError && <ErrorBlock message={error?.message!} title={error?.name!} />}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        onSubmit={handleSubmit(editProjectionHandler)}
        className="edit_projection_form mt-[10%]"
      >
        <h2 className="text-center my-2">
          Editing projection for {projection?.movie.name} at{' '}
          <ReservationDate date={projection!.showingTime} />
        </h2>
        <div className="edit_projection_form_input_div">
          <label htmlFor="showingTIme">ShowingTime: </label>
          <input
            {...register('showingTime')}
            type="datetime-local"
            id="showingTime"
            defaultValue={new Date(projection!.showingTime).toISOString()}
          />
        </div>
        <div className="edit_projection_form_input_div">
          <label htmlFor="hallName">Hall: </label>
          <select
            className="border border-slate-300 rounded text-lg px-2 outline-none"
            defaultValue={projection?.hall.name}
            {...register('hallName')}
            id="hallName"
          >
            <option value="MainHall">MainHall</option>
            <option value="SideHall">SideHall</option>
          </select>
        </div>
        <div className="edit_projection_form_input_div">
          <label htmlFor="ticketPrice">Ticket Price: </label>
          <input {...register('ticketPrice')} type="number" id="ticketPrice" />
        </div>
        <div className="edit_projection_form_btn_div">
          <button
            onClick={() => showEdit(false)}
            type="button"
            className="flex-1 border border-orange-600 rounded bg-orange-600 text-white font-bold py-1 hover:bg-white hover:text-orange-600 duration-150"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 border border-blue-600 rounded bg-blue-600 text-white font-bold py-1 hover:text-blue-600 hover:bg-white duration-150"
          >
            Confirm
          </button>
        </div>
      </motion.form>
    </>
  );
};

export default EditProjectionForm;
