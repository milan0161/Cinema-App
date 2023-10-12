import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type SocialIconsProps = {
  className?: string;
};
const SocialIcons = ({ className }: SocialIconsProps) => {
  return (
    <div className={`flex flex-row gap-5 ${className}`}>
      <a href="http://www.facebook.com">
        <FontAwesomeIcon
          className="h-6 text-white hover:text-blue-600 duration-300"
          icon={faFacebookSquare}
        />
      </a>
      <a href="http://www.twitter.com">
        <FontAwesomeIcon
          className="h-6 text-white hover:text-blue-600 duration-300"
          icon={faTwitter}
        />
      </a>
      <a href="http://www.instagram.com">
        {' '}
        <FontAwesomeIcon
          className="h-6 text-white hover:text-blue-600 duration-300"
          icon={faInstagram}
        />
      </a>
    </div>
  );
};
export default SocialIcons;
