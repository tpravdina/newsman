import React from 'react';
import Lang from '../Lang';
import './UpPanel.scss';

interface UpPanelProps{
    className: string;
  }

const UpPanel:React.FC<UpPanelProps> = ({ className }) => (
  <div className={`UpPanel ${className}`}>
    <a className="UpPanel__instagram" href="#">Instagram</a>
    <a className="UpPanel__facebook" href="#">Facebook</a>
    <div className="UpPanel__search-group">
      <p className="UpPanel__search">search</p>
      <input className="UpPanel__input" type="text" />
    </div>
    <div className="UpPanel__lang-group">
      <Lang className="UpPanel__lang" />
      {/* <p className="UpPanel__lang">eng</p> */}
      <p className="UpPanel__number">1</p>
    </div>
  </div>
);

export default UpPanel;
