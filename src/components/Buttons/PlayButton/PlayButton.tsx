import React from 'react';
import '../RoundButton.scss';
import { ButtonProps } from '../ButtonProps';

const PlayButton: React.FC<ButtonProps> = ({ onClick, className }) => (
  <button type="button" className={`PlayButton ${className}`} onClick={onClick}>
    <svg className="RoundButton__svg" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50.5" r="49" />
      <path
        className="RoundButton__svg__inner--filled"
        d="M45.6429 59.298L62.3572 50.5L45.6429 41.702V59.298Z"
      />
    </svg>
  </button>
);

export default PlayButton;
