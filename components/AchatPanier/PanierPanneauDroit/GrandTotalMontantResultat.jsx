import React from 'react';
import styles from '/styles/Cart.module.css';

const GrandTotalMontantResultat = ({ total }) => {
  return (
    <div className={styles.grandTotal}>
      <strong>Grand Total: ${total}</strong>
    </div>
  );
};

export default GrandTotalMontantResultat;
