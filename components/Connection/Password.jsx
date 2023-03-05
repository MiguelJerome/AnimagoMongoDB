import PropTypes from 'prop-types';
import React from 'react';
import styles from '/styles/Connexion.module.css';

function Password({ password, handleChange }) {
  return (
    <div className={styles.promptWrapper}>
      <label className={styles.label} htmlFor="pwd">
        Password:
      </label>
      <input
        placeholder="******"
        name="password"
        type="password"
        id="pwd"
        value={password}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
}

Password.propTypes = {
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Password;
