import React from 'react';
import '../RoundButton.scss';
import { ButtonProps } from '../ButtonProps';

const RoundNextButton: React.FC<ButtonProps> = ({ onClick, className, disabled }) => (
  <button
    type="button"
    className={`RoundButton ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    <svg
      className="RoundButton__svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="29" />
      <path
        className="RoundButton__svg__inner--outlined"
        d="M27.2441 25.5659L34.7945 31.6062L27.2441 36.8915"
      />
    </svg>
  </button>
);
export default RoundNextButton;
