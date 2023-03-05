import React from 'react';
import styles from '/styles/Connexion.module.css';

export default function BoutonReset() {
  return (
    <div className={styles.promptWrapper}>
      <button type="reset" className={styles.btnAuthentification}>
        Reset
      </button>
    </div>
  );
}
