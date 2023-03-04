import React from 'react';
import styles from '/styles/Cart.module.css';

const ProduitInfoPanier = ({ item, getRemainingStock }) => {
  return (
    <div className={styles.cartFormWragper}>
      <p className={styles.productInfo}>{item.name}</p>
      <p className={styles.productInfo}>Prix: ${item.price}</p>
      <p className={styles.productInfo}>
        En Stock: {getRemainingStock(item._id)}
      </p>
    </div>
  );
};

export default ProduitInfoPanier;
