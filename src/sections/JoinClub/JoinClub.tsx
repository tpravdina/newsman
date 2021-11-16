import React from 'react';
import './JoinClub.scss';

const JoinClub: React.FC = () => (
  <div className="JoinClub" id="JoinClub">
    <div className="JoinClub__text">
      <p className="JoinClub__first-line">join the paperboy&apos;s club</p>
      <p className="JoinClub__second-line">
        and
        {' '}
        <span className="JoinClub__second-line--acсent">get 10%</span>
        {' '}
        off this order, regular discounts + much more
      </p>
    </div>
  </div>
);

export default JoinClub;
