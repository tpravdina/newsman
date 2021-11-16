/* eslint-disable no-nested-ternary */
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import RectButton from '../../Buttons/RectButton';

import './ContactForm.scss';

interface ContactFormProps {
  className: string;
}
interface SubmitValue {
  email: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const useFirstRender = (): boolean => {
    const ref = useRef(true);
    const firstRender = ref.current;
    console.log(ref);
    ref.current = false;
    return firstRender;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: SubmitValue) => {
    try {
      await fetch('https://webhook.site/d292a35d-6dae-4ddd-a959-61bda193bca7', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className={`ContactForm ${className}`} onSubmit={handleSubmit(onSubmit)} id="contactForm">
      <input
        className={`ContactForm__input ${
          useFirstRender()
            ? ''
            : errors.name
              ? 'ContactForm__input--error'
              : 'ContactForm__input--correct'
        }`}
        placeholder="Name"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('name', { required: true, pattern: /^[a-zA-Z ]{4,}$/ })}
      />
      <div className="ContactForm__error-message">{errors.name && 'Name is not correct'}</div>
      <input
        className={`ContactForm__input ${
          useFirstRender()
            ? ''
            : errors.eMail
              ? 'ContactForm__input--error'
              : 'ContactForm__input--correct'
        }`}
        placeholder="E-mail"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('eMail', { required: true, pattern: /\S+@\S+\.\S+/ })}
      />
      <div className="ContactForm__error-message">{errors.eMail && 'E-mail is not correct'}</div>
      <RectButton submit withArrow className="ContactForm__button">
        send
      </RectButton>
    </form>
  );
};

export default ContactForm;
