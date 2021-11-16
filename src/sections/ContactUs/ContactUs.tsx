import React from 'react';
import './ContactUs.scss';

import { ContactForm } from '../../components/Forms/ContactForm';
import Title from '../../components/Title';

const ContactUs: React.FC = () => (
  <div className="ContactUs" id="ContactUs">
    <Title className="ContactUs__title" modifier="center-line">
      Contact Us
    </Title>
    <div className="ContactUs__geometry-container">
      <div className="ContactUs__circule" />
      <div className="ContactUs__circule" />
      <div className="ContactUs__circule" />
      <hr className="ContactUs__vertical-line" />
    </div>
    <div className="ContactUs__left-text">
      <p>4517 Washington Ave.</p>
      <p>Manchester, Kentucky</p>
      <p>39495</p>
    </div>
    <div className="ContactUs__right-text">
      <div className="ContactUs__contact-item">
        <a href="tel:(405) 555-0128">(405) 555-0128</a>
      </div>
      <div className="ContactUs__contact-item">
        <a href="tel:(219) 555-0114">(219) 555-0114</a>
      </div>
      <div className="ContactUs__contact-item">
        <a href="mailto:papperboy@gmail.com?subject=Hello paperboy!">papperboy@&shy;gmail.com</a>
      </div>
    </div>
    <div className="ContactUs__center-text">
      <p>Velit officia consequat duis</p>
      <p>enim velit mollit.</p>
    </div>
    <hr className="ContactUs__big-vertical-line" />
    <ContactForm className="ContactUs__contact-form" />
  </div>
);

export default ContactUs;
