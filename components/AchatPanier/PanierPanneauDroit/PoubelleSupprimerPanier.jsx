import React from 'react';
import styles from '/styles/Cart.module.css';

const PoubelleSupprimerPanier = ({
  item,
  removeFromCart,
  handleChange,
  cart,
  setCart,
}) => {
  const clearInput = () => {
    handleChange(item, 0);
  };

  const clearDepart = () => {
    const updatedProduct = { ...item, stock: 0 };
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
