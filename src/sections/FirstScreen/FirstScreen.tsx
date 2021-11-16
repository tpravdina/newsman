import React from 'react';
import './FirstScreen.scss';

import RectButton from '../../components/Buttons/RectButton';

const FirstScreen: React.FC = () => (
  <div className="FirstScreen" id="FirstScreen">
    <div className="FirstScreen__main-title-grid">
      <h2 className="main-title FirstScreen__main-title FirstScreen__main-title--left">For</h2>
      <h2 className="main-title FirstScreen__main-title FirstScreen__main-title--right">men</h2>
    </div>
    <RectButton>shop now</RectButton>
  </div>
);

export default FirstScreen;
