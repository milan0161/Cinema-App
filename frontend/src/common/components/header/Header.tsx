import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import Logo from '../../../assets/CinemaIcon.svg';
import { Link, useNavigate } from 'react-router-dom';
import MainNav from '../navigation/MainNav';
import DropMenu from '../navigation/DropMenu';
import DropMenuItem from '../navigation/DropMenuItem';
import { logout } from '../../../features/auth-module/authSlice';
import { removeToken } from '../../../app/utils/saveToken';
import HorizontalLine from '../ui/HorizontalLine';
import SocialIcons from './SocialIcons';

const Header = (): React.JSX.Element => {
  const userState = useAppSelector((state) => state.auth);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate('auth?mode=login');
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch(logout());
    removeToken();
    navigate('/');
    setAnchorEl(null);
  };

  const adminHandler = () => {
    navigate('admin');
    setAnchorEl(null);
  };
  const klase: string = 'flex flex-row w-full items-center mt-5';

  return (
    <header className="flex flex-col gap-y-5">
      <div className="grid grid-cols-3 grid-rows-2 xl:grid-cols-12 xl:grid-rows-1">
        <div className=" col-span-1  flex flex-row items-center justify-center gap-5 xl:col-span-3">
          <Link
            to={'/'}
            className="flex flex-row lg:w-96 items-center justify-center lg:gap-5 gap-2"
          >
            <img className="bg-white w-10" src={Logo} alt="Cinema" />
            <h1 className="lg:text-[2.5rem] text-white">Cinema</h1>
          </Link>
        </div>
        <nav className="row-start-2 col-span-3  xl:row-start-1 xl:col-start-4 xl:col-span-5">
          <MainNav />
        </nav>
        <SocialIcons className="col-start-2 col-span-1  flex items-center justify-center xl:col-start-9 xl:col-span-2" />

        <div className="flex justify-center items-center xl:col-start-11 xl:col-span-2">
          <DropMenu
            className=""
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            text={userState.isAuth ? userState.username : 'Account'}
          >
            {!userState.isAuth && (
              <DropMenuItem text="Login" handleClose={loginHandler} />
            )}
            {userState.isAdmin && (
              <DropMenuItem text="Admin Panel" handleClose={adminHandler} />
            )}
            {userState.isAuth && (
              <DropMenuItem text="Logout" handleClose={logoutHandler} />
            )}
          </DropMenu>
        </div>
      </div>
      <HorizontalLine />
    </header>
  );
};

export default Header;
