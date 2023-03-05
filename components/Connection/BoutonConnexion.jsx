import React from 'react';
import styles from '/styles/Connexion.module.css';

function BoutonConnexion({ handleFormSubmit }) {
  return (
    <div className={styles.promptWrapper}>
      <button
        type="submit"
        className={styles.btnAuthentification}
        onClickCapture={handleFormSubmit}
      >
        Connexion
      </button>
    </div>
  );
}

export default BoutonConnexion;
