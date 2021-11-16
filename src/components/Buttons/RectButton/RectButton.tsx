import React from 'react';
import './RectButton.scss';
import { ButtonProps } from '../ButtonProps';

const RectButton: React.FC<ButtonProps> = ({
  modifier,
  withArrow,
  children,
  className,
  submit,
}) => (
  <button
    type={submit ? 'submit' : 'button'}
    className={`RectButton RectButton--${modifier} ${className}`}
  >
    {children}
    {withArrow && (
      <svg
        className="RectButton__arrow"
        viewBox="0 0 77 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M73.402 10.5895L-4.71043e-05 10.5894L-4.673e-05 9.10938L73.402 9.10938L73.402 10.5895Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          // eslint-disable-next-line max-len
          d="M72.4921 9.86952L56.75 18.461L58.189 19.5996L76.0867 9.83169L57.4482 0.305349L56.0654 1.47365L72.4921 9.86952Z"
        />
      </svg>
    )}
  </button>
);

export default RectButton;
