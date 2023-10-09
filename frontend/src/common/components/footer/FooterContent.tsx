import FooterRow from './FooterRow';
import { INFO } from '../../../app/utils/constants';
const FooterContent = () => {
  return (
    <div className=" w-[60%] mx-auto flex justify-center mt-5 p-2 gap-24">
      <div>
        <h2 className="">Information:</h2>
        <FooterRow cols={INFO} route={'about'} />
      </div>
      <div>
        <h2>Contact:</h2>
        <ul className="text-blue-600">
          <li>Cinema Planer</li>
          <li>Fake Adress 99, 9999 Fake City</li>
          <li>
            <strong className="text-white">Email:</strong>
            <p>cinema@cinema.com</p>
          </li>
          <li>
            <strong className="text-white">Phone for information:</strong>
            <p>+123456789</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterContent;
