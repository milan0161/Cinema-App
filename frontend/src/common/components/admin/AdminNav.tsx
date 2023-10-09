import {
  faHouse,
  faFilm,
  faDiagramProject,
  faTheaterMasks,
  faCheckToSlot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const AdminNav = () => {
  return (
    <nav className=" bg-white  min-h-fit rounded w-40">
      <ul className="flex flex-col h-full items-center">
        <li className="admin_nav_li">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'admin_nav_a text-orange-700' : 'admin_nav_a'
            }
            to={'/admin'}
            end
          >
            <FontAwesomeIcon icon={faHouse} />
            <p> Dashboard</p>
          </NavLink>
        </li>
        <li className="admin_nav_li">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'admin_nav_a text-orange-700' : 'admin_nav_a'
            }
            to={'movies'}
          >
            <FontAwesomeIcon icon={faFilm} />
            <p>Movies</p>
          </NavLink>
        </li>
        <li className="admin_nav_li">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'admin_nav_a text-orange-700' : 'admin_nav_a'
            }
            to={'projections'}
          >
            <FontAwesomeIcon icon={faDiagramProject} />
            <p>Projections</p>
          </NavLink>
        </li>
        <li className="admin_nav_li">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'admin_nav_a text-orange-700' : 'admin_nav_a'
            }
            to={'halls'}
          >
            <FontAwesomeIcon icon={faTheaterMasks} />
            <p> Halls</p>
          </NavLink>
        </li>
        <li className="admin_nav_li">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'admin_nav_a text-orange-700' : 'admin_nav_a'
            }
            to={'reservations'}
          >
            <FontAwesomeIcon icon={faCheckToSlot} />
            <p> Reservations</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
