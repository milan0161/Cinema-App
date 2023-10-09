import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <ul className="flex flex-row h-16 items-center justify-center m-auto border border-slate-400 gap-x-12 sm:gap-x-20 lg:gap-x-16 2xl:gap-x-24">
      <li className="nav_li">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav_li_active' : 'nav_link'
          }
          to={'/'}
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </li>
      <li className="nav_li">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav_li_active' : 'nav_link'
          }
          to={'program'}
        >
          Program
        </NavLink>
      </li>
      <li className="nav_li">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav_li_active' : 'nav_link'
          }
          to={'movies'}
        >
          Movies
        </NavLink>
      </li>
      <li className="nav_li">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav_li_active' : 'nav_link'
          }
          to={'about'}
        >
          About Us
        </NavLink>
      </li>
    </ul>
  );
};

export default MainNav;
