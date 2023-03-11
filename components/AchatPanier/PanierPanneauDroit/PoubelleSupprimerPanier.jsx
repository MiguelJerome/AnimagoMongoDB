import React from 'react';
import styles from '/styles/Cart.module.css';
import panier from '/models/panier.jsx';

const PoubelleSupprimerPanier = ({
  item,
  removeFromCart,
  handleChange,
  cart,
  setCart,
}) => {
  const initialCartItem = panier.find((p) => p._id === item._id);

  const clearInput = () => {
    handleChange(item, initialCartItem.stock);
  };

  const clearDepart = () => {
    const updatedProduct = { ...item, stock: initialCartItem.stock };
    const updatedCart = Array.isArray(cart)
      ? cart.map((p) => {
          if (p._id === item._id) {
            return updatedProduct;
          } else {
            return p;
          }
        })
      : [];
    setCart(updatedCart);
    handleChange(0);
  };

  return (
    <span
      role="img"
      aria-label="trash"
      onClick={() => {
        clearInput();
        clearDepart();
        removeFromCart(item);
      }}
      className={styles.imgCard}
    >
      🗑️
    </span>
  );
};

export default PoubelleSupprimerPanier;
