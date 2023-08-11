import React, { useState } from 'react';
import { useAppSelector } from '../../../app/store';
import Logo from '../../../assets/CinemaIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import AccountMenu from './AccountMenu';
import MainNav from '../navigation/MainNav';

const Header = (): React.JSX.Element => {
  const userState = useAppSelector((state) => state.auth);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <header className="flex flex-col px-10">
      <div className="flex flex-row justify-between w-full my-2">
        <div className="flex flex-row gap-5">
          <a href="http://www.facebook.com">
            <FontAwesomeIcon className="h-6 text-white" icon={faFacebookSquare} />
          </a>
          <a href="http://www.twitter.com">
            <FontAwesomeIcon className="h-6 text-white" icon={faTwitter} />
          </a>
          <a href="http://www.instagram.com">
            {' '}
            <FontAwesomeIcon className="h-6 text-white" icon={faInstagram} />
          </a>
        </div>
        <div className="flex flex-row gap-2">
          {!userState.isAuth && (
            <Link className="login_reg_btn text-white" to={'auth?mode=login'}>
              Account
            </Link>
          )}
          {userState.isAuth && (
            <button
              onClick={() => {
                setIsVisible((prev) => !prev);
              }}
              className="login_reg_btn no-underline"
            >
              {userState.username}
            </button>
          )}
          {isVisible && <AccountMenu setIsVisible={setIsVisible} isAdmin={userState.isAdmin} />}
        </div>
      </div>
      <div className=" flex flex-row w-96 items-center justify-center gap-5 py-4">
        <Link to={'/'} className="flex flex-row w-96 items-center justify-center gap-5 py-4">
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
