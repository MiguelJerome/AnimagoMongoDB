import React from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';

const ClearInput = ({ item, handleChange, cart, setCart }) => {
  const clearInputAndStock = (item) => {
    handleChange(item, 0);
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((i) => i._id === item._id);
    if (itemIndex !== -1) {
      const initialStock = item.stock;
      const updatedItem = {
        ...updatedCart[itemIndex],
        purchaseQuantity: 0,
        stock: initialStock,
      };
      const newCart = [
        ...updatedCart.slice(0, itemIndex),
        updatedItem,
        ...updatedCart.slice(itemIndex + 1),
      ];
      setCart(newCart);
    }
  };

  return (
    <button
      className={styles.buttonClear}
      onClick={() => clearInputAndStock(item)}
    >
      Clear
    </button>
  );
};

export default ClearInput;
