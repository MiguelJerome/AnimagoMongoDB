import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '/styles/Inscription.module.css';

const Nom = ({ lastName, handleChange, errorMessage, regex }) => {
  const nomRegex = new RegExp(regex);
  const isValidNom = nomRegex.test(lastName);

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
        onChange={handleChange}
        className={`${styles.input} ${!isValidNom ? '' : styles.errorText}`}
      />
      {!isValidNom && <span className={styles.errorText}>{errorMessage}</span>}
    </div>
  );
};

Nom.propTypes = {
  lastName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  regex: PropTypes.string.isRequired,
};

export default Nom;
