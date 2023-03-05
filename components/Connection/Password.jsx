import PropTypes from 'prop-types';
import React from 'react';
import styles from '/styles/Connexion.module.css';

const Password = ({ password, handleChange }) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const isValidPassword = passwordRegex.test(password);

  const errorMessage =
    'Le mot de passe doit contenir au moins 8 caractères, une lettre minuscule, une lettre majuscule et un chiffre.';

  return (
    <div className={styles.promptWrapper}>
      <label className={styles.label} htmlFor="pwd">
        Mot de passe:
      </label>
      <input
        placeholder="******"
        name="password"
        type="password"
        id="pwd"
        value={password}
        onChange={handleChange}
        className={`${styles.input} ${isValidPassword ? '' : styles.errorText}`}
      />
      {!isValidPassword && (
        <span className={styles.errorText}>{errorMessage}</span>
      )}
    </div>
  );
};

Password.propTypes = {
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Password;
