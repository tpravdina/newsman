import React from 'react';
import './Header.scss';

import UpPanel from '../../components/UpPanel';
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';

const Header: React.FC = () => (
  <div className="Header" id="Header">
    <UpPanel className="Header__up-panel" />
    <Logo className="Header__logo" color="orange" />
    <Navbar className="Header__navbar" />
  </div>
);

export default Header;
