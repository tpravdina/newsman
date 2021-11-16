import React from 'react';
import '../RoundButton.scss';
import { ButtonProps } from '../ButtonProps';

const PauseButton: React.FC<ButtonProps> = ({ onClick, className }) => (
  <button type="button" className={`RoundButton ${className}`} onClick={onClick}>
    <svg
      className="RoundButton__svg"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="75" cy="75" r="74.5" />
      <rect className="RoundButton__svg__inner--filled" x="91" y="42" width="3" height="66" />
      <rect className="RoundButton__svg__inner--filled" x="56" y="42" width="3" height="66" />
    </svg>
  </button>
);

export default PauseButton;
