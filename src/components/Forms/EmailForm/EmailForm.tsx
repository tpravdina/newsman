/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './EmailForm.scss';

import { useForm } from 'react-hook-form';

interface EmailFormProps {
  className: string;
}

interface SubmitValue {
  email: string;
}

const EmailForm: React.FC<EmailFormProps> = ({ className }) => {
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
    <form className={`EmailForm ${className}`} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={`EmailForm__input ${errors.email ? 'EmailForm__input--error' : ''}`}
        placeholder="E-mail"
        {...register('email', { pattern: /\S+@\S+\.\S+/ })}
      />
      <input
        className="RectButton RectButton--filled EmailForm__button"
        type="submit"
        value="send"
      />
      <div className="EmailForm__error-message">{errors.email && 'E-mail is not correct'}</div>
    </form>
  );
};

export default EmailForm;
