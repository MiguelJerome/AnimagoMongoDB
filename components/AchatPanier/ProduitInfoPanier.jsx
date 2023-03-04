import React from 'react';
import styles from '/styles/Cart.module.css';

export default function ProduitInfoPanier({ name, price }) {
  return (
    <div className={styles.cartFormWrapper}>
      <p className={styles.productInfo}>{name}</p>
      <p className={styles.productInfo}>${price}</p>
    </div>
  );
}
