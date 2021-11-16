import React from 'react';
import './Footer.scss';

import { Link } from 'react-scroll';
import { useCategoryContext } from '../../contexts/useCategoryContext';
import footerNavLinks from '../../mock/footerNavLinks';
import categories from '../../mock/categories';
import footerHelpContacts from '../../mock/footerHelpContacts';

const Footer: React.FC = () => {
  const { setCategory } = useCategoryContext();
  return (
    <div className="Footer">
      <img className="Footer__logo" src="/img/logo-orange.svg" alt="logo" />
      <div className="Footer__menu-item Footer__help">
        <h2 className="Footer__title">help</h2>
        <ul className="Footer__ul">
          {footerHelpContacts.map((elem, index) => (
            <li key={index.toString()} className="Footer__li-item">
              <a href={elem.href}>{elem.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="Footer__menu-item Footer__shop">
        <h2 className="Footer__title">shop</h2>
        <ul className="Footer__ul">
          {categories.map((elem, index) => (
            <li key={index.toString()}>
              <Link
                className="Footer__li-item"
                to="TopSales"
                onClick={() => setCategory(elem)}
                smooth
              >
                {elem}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="Footer__menu-item Footer__company">
        <h2 className="Footer__title">company</h2>
        <ul>
          <ul className="Footer__ul">
            {footerNavLinks.map((linkItem) => (
              <li key={linkItem.title}>
                <Link className="Footer__li-item" to={linkItem.link} smooth>
                  {linkItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </div>
      <p className="Footer__buttom-text">
        2021 Papperboy, Inc. All Rights Reserved.
        {' '}
        <a href="#">Terms</a>
        ,
        <a href="#">Privacy and Cookies</a>
        {' '}
        &
        <a href="#">Accessibility</a>
      </p>
    </div>
  );
};

export default Footer;
