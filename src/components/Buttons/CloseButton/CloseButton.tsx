import React from 'react';
import '../RoundButton.scss';
import { ButtonProps } from '../ButtonProps';

const CloseButton: React.FC<ButtonProps> = ({ onClick, className }) => (
  <button type="button" className={`CloseButton ${className}`} onClick={onClick}>
    <svg
      className="RoundButton__svg--inversed"
      viewBox="0 0 150 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="75" cy="75" r="74.5" />
      <rect
        className="RoundButton__svg--inversed__inner--filled"
        x="97.7739"
        y="50.6049"
        width="3"
        height="66"
        transform="rotate(45 97.7739 50.6049)"
      />
      <rect
        className="RoundButton__svg--inversed__inner--filled"
        x="51.1048"
        y="52.7262"
        width="3"
        height="66"
        transform="rotate(-45 51.1048 52.7262)"
      />
    </svg>
  </button>
);

export default CloseButton;
