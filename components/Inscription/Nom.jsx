import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '/styles/Inscription.module.css';

const Nom = ({ lastName, handleChange, errorMessage, regex }) => {
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
      <label className={styles.label} htmlFor="lastName">
        Nom:
      </label>
      <input
        placeholder="Nom"
        name="lastName"
        type="text"
        id="lastName"
        value={lastName}
        onChange={handleInputChange}
        className={`${styles.input} ${!inputError ? '' : styles.errorText}`}
      />
      {inputError && <span className={styles.errorText}>{errorMessage}</span>}
    </div>
  );
};

Nom.propTypes = {
  lastName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  regex: PropTypes.string.isRequired,
};

export default Nom;
