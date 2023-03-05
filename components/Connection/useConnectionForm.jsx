import { useState } from 'react';

export const useConnectionForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;
    return re.test(password);
  };
  const handleChange = (e) => {
    if (!e.target) return;

    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'email') {
      const isValid = validateEmail(value);

      if (!isValid) {
        setErrorMessage('Votre email est invalide');
      } else {
        setErrorMessage('');
      }
    } else if (name === 'password') {
      const isValid = validatePassword(value);

      if (!isValid) {
        setErrorMessage('Votre mot de passe est invalide');
      } else {
        setErrorMessage('');
      }
    } else if (!value.length) {
      setErrorMessage(`${name} est requis.`);
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errorMessage) {
      console.log('Form data:', formData);
      setFormData({ email: '', password: '' });
    }
  };

  return {
    formData,
    errorMessage,
    handleChange,
    handleSubmit,
  };
};
