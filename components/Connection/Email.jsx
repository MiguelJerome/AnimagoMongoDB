import PropTypes from 'prop-types';
import React from 'react';
import styles from '/styles/Connexion.module.css';

const Email = ({ email, handleChange }) => {
  return (
    <div className={styles.promptWrapper}>
      <label className={styles.label} htmlFor="email">
        Email address:
      </label>
      <input
        placeholder="tonemail@test.com"
        name="email"
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

Email.propTypes = {
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Email;
