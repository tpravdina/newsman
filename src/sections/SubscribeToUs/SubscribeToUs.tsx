import React from 'react';
import './SubscribeToUs.scss';
import EmailForm from '../../components/Forms/EmailForm';

const SubscribeToUs: React.FC = () => (
  <div className="SubscribeToUs" id="SubscribeToUs">
    <h2 className="SubscribeToUs__title">Subscribe to us</h2>
    <p className="SubscribeToUs__text">Velit officia consequat duis enim velit mollit.</p>
    <EmailForm className="SubscribeToUs__form" />
  </div>
);

export default SubscribeToUs;
