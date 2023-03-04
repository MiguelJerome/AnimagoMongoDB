import React from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

const DecrementerProduitCarte = ({
  product,
  onQuantityChange,
  quantite,
  addToCart,
}) => {
  const [, , , setCart] = useCart([]);

  const decrementer = () => {
    const newQuantity = quantite > 0 ? quantite - 1 : quantite;
    addToCart(product, -1);
    onQuantityChange(newQuantity);
  };

  return (
    <button className={styles.button} onClick={decrementer}>
      -
    </button>
  );
};

export default DecrementerProduitCarte;
