import React from 'react';
import './AboutPaperboy.scss';

const AboutPaperboy: React.FC = () => (
  <div className="AboutPaperboy" id="AboutPaperboy">
    <img className="AboutPaperboy__logo" src="/img/logo-paperboy.svg" alt="logo" />
    <img className="AboutPaperboy__img" src="/img/paperboy-circules.png" alt="logo" />
    <div className="AboutPaperboy__text">
      {/* eslint-disable-next-line max-len */}
      <p className="AboutPaperboy__paragraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      {/* eslint-disable-next-line max-len */}
      <p className="AboutPaperboy__paragraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <p className="AboutPaperboy__vertical-text">watch the video</p>
  </div>
);

export default AboutPaperboy;
