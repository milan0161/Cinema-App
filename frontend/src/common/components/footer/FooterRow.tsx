import { Link } from 'react-router-dom';

type FooterRowProps = {
  cols: string[];
  route: string;
};

const FooterRow = ({ cols, route }: FooterRowProps) => {
  return (
    <ul className="flex flex-col gap-2">
      {cols.map((col, i) => {
        return (
          <li key={i} className="cursor-pointer">
            <Link to={route}> {col}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterRow;
