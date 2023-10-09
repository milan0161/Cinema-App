import { useAppDispatch } from '../../../app/store/store';
import { setUserEmail } from '../../../features/admin/state/adminSlice';

type AdminSingleUserProps = {
  email: string;
  showDetails: () => void;
};
const AdminSingleUser = ({ email, showDetails }: AdminSingleUserProps) => {
  const dispatch = useAppDispatch();
  const getReservationsHandler = () => {
    dispatch(setUserEmail(email));
    showDetails();
  };
  return (
    <li
      className="w-1/2 border-slate-300 rounded border text-center text-lg"
      key={email}
    >
      <button onClick={getReservationsHandler} type="button">
        {email}
      </button>
    </li>
  );
};

export default AdminSingleUser;
