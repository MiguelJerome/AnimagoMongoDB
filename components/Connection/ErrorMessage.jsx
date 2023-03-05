import React from 'react';
import PropTypes from 'prop-types';
import styles from '/styles/Connexion.module.css';

function ErrorMessage({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div>
      <p className={styles.errorText}>{message}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
