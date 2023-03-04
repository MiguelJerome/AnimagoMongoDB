import React from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

const IncrementerProduitCarte = ({
  product,
  onQuantityChange,
  quantite,
  addToCart,
  stock,
}) => {
  const [, , , setCart] = useCart([]);

  const incrementer = () => {
    if (quantite < stock) {
      const newQuantity = quantite + 1;
      addToCart(product, 1);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <button className={styles.button} onClick={incrementer}>
      +
    </button>
  );
};

export default IncrementerProduitCarte;
