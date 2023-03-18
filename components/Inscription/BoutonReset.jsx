import React from 'react';
import styles from '/styles/Connexion.module.css';

function BoutonReset({ handleFormReset }) {
  return (
    <button
      type="reset"
      className={styles.btnAuthentification}
      onClick={handleFormReset}
    >
      Reset
    </button>
  );
}

export default BoutonReset;
