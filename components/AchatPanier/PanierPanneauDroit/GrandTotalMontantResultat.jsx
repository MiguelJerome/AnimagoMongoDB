import React from 'react';
import styles from '/styles/Cart.module.css';

const GrandTotalMontantResultat = ({ totalPriceInCart }) => {
  return (
    <div className={styles.grandTotal}>
      <strong>Grand Total: ${totalPriceInCart}</strong>
    </div>
  );
};

export default GrandTotalMontantResultat;
