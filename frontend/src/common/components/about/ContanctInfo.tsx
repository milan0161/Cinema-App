import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContanctInfo = () => {
  return (
    <div className="flex flex-col gap-5 shadow-md shadow-slate-300 p-5">
      <p>
        <FontAwesomeIcon className="mx-2" icon={faLocationDot} />
        <i>Fake Adress 99, 9999 Fake City</i>
      </p>
      <p>
        <FontAwesomeIcon className="mx-2" icon={faPhone} />
        <i>+123456789</i>
      </p>
      <p>
        <FontAwesomeIcon className="mx-2" icon={faEnvelope} />
        <i>cinemamail@cinema.com</i>
      </p>
      <div className="flex flex-col">
        <p>
          <FontAwesomeIcon className="mx-2" icon={faClock} />
          <i>07:00 - 00:00</i>
        </p>
      </div>
    </div>
  );
};

export default ContanctInfo;
