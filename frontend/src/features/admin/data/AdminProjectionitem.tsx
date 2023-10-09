import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';
import { useDeleteProjectionMutation } from '../../projections/api/projectionsApi';
import { IProjection } from '../../projections/types';
import ErrorBlock from '../../../common/components/ui/ErrorBlock';

type AdminProjectionItemProps = {
  projection: IProjection;
  showEdit: (showing: boolean, projection: IProjection) => void;
};

const AdminProjectionItem = ({
  projection,
  showEdit,
}: AdminProjectionItemProps) => {
  const [deleteProjection, { isLoading, isError, error }] =
    useDeleteProjectionMutation();

  const deleteProjectionHandler = () => {
    const confirm = window.confirm('Are you sure?');
    if (!confirm) return;
    deleteProjection(projection.id);
  };
  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      {isError && <ErrorBlock message={error?.message!} title={error?.name!} />}
      <li className="flex justify-between w-full border px-4 py-2 items-center">
        <p>{projection.movie.name}</p>
        <p>{projection.showingTime}</p>
        <p>{projection.hall.name}</p>
        <p>{projection.ticketPrice}$</p>
        <div>
          <button
            type="button"
            onClick={() => {
              showEdit(true, projection);
            }}
            className="border border-slate-300 px-2 py-1 rounded hover:scale-110 duration-300"
          >
            Edit
          </button>
          <button
            onClick={deleteProjectionHandler}
            type="button"
            className="border border-slate-300 px-2 py-1 rounded hover:scale-110 duration-300 ml-2"
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default AdminProjectionItem;
