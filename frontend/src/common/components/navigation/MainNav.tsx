import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <ul className="flex flex-row h-16 items-center justify-center m-auto border border-slate-400 gap-x-12 sm:gap-x-20 lg:gap-x-16 2xl:gap-x-24">
      <li className="nav_li">
        <Link to={'/'}>
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </li>
      <li className="nav_li">
        <Link to={'program'}>Program</Link>
      </li>
      <li className="nav_li">
        <Link to={'movies'}>Movies</Link>
      </li>

      <li className="nav_li">About Us</li>
    </ul>
  );
};

export default MainNav;
