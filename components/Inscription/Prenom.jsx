import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '/styles/Inscription.module.css';

const Prenom = ({ firstName, handleChange, errorMessage, regex }) => {
  const prenomRegex = new RegExp(regex);
  const isValidPrenom = prenomRegex.test(firstName);

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
        onChange={handleChange}
        className={`${styles.input} ${!isValidPrenom ? '' : styles.errorText}`}
      />
      {!isValidPrenom && (
        <span className={styles.errorText}>{errorMessage}</span>
      )}
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
