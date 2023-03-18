import PropTypes from 'prop-types';
import React from 'react';
import styles from '/styles/Connexion.module.css';

const ConfirmPassword = ({ confirmPassword, handleChange, regex }) => {
  const passwordRegex = new RegExp(regex);
  const isValidPassword = passwordRegex.test(confirmPassword);

  const errorMessage =
    'Le mot de passe doit contenir au moins 8 caractères, une lettre minuscule, une lettre majuscule et un chiffre.';

  return (
    <div className={styles.promptWrapper}>
      <label className={styles.label} htmlFor="confirmpwd">
        Confirmer le mot de passe:
      </label>
      <input
        placeholder="******"
        name="confirmPassword"
        type="password"
        id="confirmpwd"
        value={confirmPassword}
        onChange={handleChange}
        className={`${styles.input} ${isValidPassword ? '' : styles.errorText}`}
      />
      {!isValidPassword && (
        <span className={styles.errorText}>{errorMessage}</span>
      )}
    </div>
  );
};

ConfirmPassword.propTypes = {
  confirmPassword: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  regex: PropTypes.string.isRequired,
};

export default ConfirmPassword;
