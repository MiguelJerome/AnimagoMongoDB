import React from 'react';
import styles from '/styles/Cart.module.css';

const GrandTotalParItemResultat = ({ item }) => {
  return (
    <li className={styles.itemTotal}>
      {item.name} - {parseInt(item.purchaseQuantity, 10)} x $
      {parseFloat(item.price).toFixed(2)} = $
      {(parseInt(item.purchaseQuantity, 10) * parseFloat(item.price)).toFixed(
        2
      )}
    </li>
  );
};

export default GrandTotalParItemResultat;
