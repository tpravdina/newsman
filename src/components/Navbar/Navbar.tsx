import React from 'react';
import './Navbar.scss';

import { Link } from 'react-scroll';
import headerNavLinks from '../../mock/headerNavLinks';

interface Props {
  className: string
}

const Navbar:React.FC<Props> = ({ className }) => (
  <nav className={`Navbar ${className}`}>
    <ul className="Navbar__ul">
      {headerNavLinks.map((linkItem) => (
        <li key={linkItem.title}>
          <Link className="Navbar__link" to={linkItem.link} smooth>{linkItem.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
