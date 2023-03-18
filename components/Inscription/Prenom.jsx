import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '/styles/Inscription.module.css';

const Prenom = ({ firstName, handleChange, errorMessage, regex }) => {
  const [inputError, setInputError] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!RegExp(regex).test(value)) {
      setInputError(true);
    } else {
      setInputError(false);
    }
    handleChange(e);
  };

  return (
    <div className={styles.promptWrapper}>
      <label className={styles.label} htmlFor="firstName">
        Prénom:
      </label>
      <input
        placeholder="Prénom"
        name="firstName"
        type="text"
        id="firstName"
        value={firstName}
        onChange={handleInputChange}
        className={`${styles.input} ${!inputError ? '' : styles.errorText}`}
      />
      {inputError && <span className={styles.errorText}>{errorMessage}</span>}
    </div>
  );
};

Prenom.propTypes = {
  firstName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  regex: PropTypes.string.isRequired,
};

export default Prenom;
