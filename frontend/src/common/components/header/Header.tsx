import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import Logo from '../../../assets/CinemaIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import MainNav from '../navigation/MainNav';
import DropMenu from '../navigation/DropMenu';
import DropMenuItem from '../navigation/DropMenuItem';
import { logout } from '../../../features/auth-module/authSlice';
import { removeToken } from '../../../app/utils/saveToken';

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

  return (
    <header className="flex flex-col px-10">
      <div className="flex flex-row justify-between w-full my-2">
        <div className="flex flex-row gap-5">
          <a href="http://www.facebook.com">
            <FontAwesomeIcon
              className="h-6 text-white"
              icon={faFacebookSquare}
            />
          </a>
          <a href="http://www.twitter.com">
            <FontAwesomeIcon className="h-6 text-white" icon={faTwitter} />
          </a>
          <a href="http://www.instagram.com">
            {' '}
            <FontAwesomeIcon className="h-6 text-white" icon={faInstagram} />
          </a>
        </div>
        <DropMenu
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
      <div className=" flex flex-row w-96 items-center justify-center gap-5 py-4">
        <Link
          to={'/'}
          className="flex flex-row w-96 items-center justify-center gap-5 py-4"
        >
          <img className="bg-white w-10" src={Logo} alt="Cinema" />
          <h1 className="text-[40px] text-white">Cinema</h1>
        </Link>
      </div>
      <nav className="w-full mx-auto lg:w-1/2">
        <MainNav />
      </nav>
    </header>
  );
};

export default Header;
