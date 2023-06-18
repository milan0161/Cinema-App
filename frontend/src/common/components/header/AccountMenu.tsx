import { useAppDispatch } from '../../../app/store';
import { logout } from '../../../features/auth-module/authSlice';
import { removeToken } from '../../../utils/saveToken';
import { useNavigate } from 'react-router-dom';
type AccMenuProps = {
  isAdmin: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AccountMenu = ({ isAdmin, setIsVisible }: AccMenuProps): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(logout());
    removeToken();
    setIsVisible(false);
    navigate('/');
  };

  return (
    <div className="border p-4 border-white absolute top-8 right-8 flex flex-col rounded">
      {isAdmin && (
        <button
          onClick={() => {
            navigate('admin');
            setIsVisible(false);
          }}
          type="button"
          className="acc_menu_btn"
        >
          Admin Panel
        </button>
      )}
      <button className="acc_menu_btn" onClick={logoutHandler} type="button">
        Log out
      </button>
    </div>
  );
};

export default AccountMenu;
