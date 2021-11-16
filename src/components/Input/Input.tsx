import React from 'react';
import './Input.scss';

interface InputProps {
    color?: string
    placeholder?: string
}

const Input:React.FC<InputProps> = ({ color, placeholder }) => (
  <input
    type="text"
    className={`Input Input--${color}`}
    placeholder={placeholder}
  />
);

export default Input;
