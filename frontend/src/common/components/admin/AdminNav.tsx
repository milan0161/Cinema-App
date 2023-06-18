import { faHouse, faFilm, faDiagramProject, faTheaterMasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <nav className=" bg-white  min-h-fit rounded w-40">
      <ul className="flex flex-col h-full items-center">
        <li className="admin_nav_li">
          <Link className="admin_nav_a" to={'/admin'}>
            <FontAwesomeIcon icon={faHouse} />
            <p> Dashboard</p>
          </Link>
        </li>
        <li className="admin_nav_li">
          <Link className="admin_nav_a" to={'movies'}>
            <FontAwesomeIcon icon={faFilm} />
            <p>Movies</p>
          </Link>
        </li>
        <li className="admin_nav_li">
          <Link className="admin_nav_a" to={'projections'}>
            <FontAwesomeIcon icon={faDiagramProject} />
            <p>Projections</p>
          </Link>
        </li>
        <li className="admin_nav_li">
          <Link className="admin_nav_a" to={'halls'}>
            <FontAwesomeIcon icon={faTheaterMasks} />
            <p> Halls</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
