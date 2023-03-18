import { useState, useEffect } from 'react';

const useInscriptionForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    setIsFormValid(
      nameRegex.test(firstName) &&
        nameRegex.test(lastName) &&
        emailRegex.test(email) &&
        passwordRegex.test(password) &&
        password === confirmPassword
    );
  };

  useEffect(() => {
    checkFormValidity();
  }, [firstName, lastName, email, password, confirmPassword]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    console.log(formData); // Replace with your form submission logic
  };

  const handleFormReset = (event) => {
    event.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return {
    firstName,
    handleFirstNameChange,
    lastName,
    handleLastNameChange,
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
    handleFormSubmit,
    handleFormReset,
    isFormValid,
  };
};

export default useInscriptionForm;
