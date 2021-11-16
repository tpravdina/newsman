import React from 'react';
import './Title.scss';

interface Props {
  className?: string;
  modifier?: string;
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ className, modifier, children }) => (
  <div className={`Title Title--${modifier} ${className}`}>
    {modifier === 'center-line' && <hr className="Title__line" />}
    <h2 className="Title__title">{children}</h2>
    {(modifier === 'left-line' || modifier === 'center-line') && <hr className="Title__line" />}
  </div>
);

export default Title;
