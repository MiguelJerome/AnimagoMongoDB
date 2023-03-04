import React from 'react';
import styles from '/styles/Cart.module.css';
import ClearInputAndDepart from '/components/ProduitBindingPanier/ClearDepartProduit/ClearInputAndDepart';

const InputPanier = ({ product, item, handleChange, getPurchaseQuantity }) => {
  return (
    <>
      <span>Qty:</span>
      <input
        className={styles.input}
        type="number"
        placeholder="1"
        value={
          item && parseInt(getPurchaseQuantity(item._id), 10) !== undefined
            ? parseInt(getPurchaseQuantity(item._id), 10)
            : ''
        }
        onChange={(e) => handleChange(item, parseInt(e.target.value))}
      />
      <ClearInputAndDepart
        product={product}
        item={item}
        onQuantityChange={handleChange}
        handleChange={handleChange}
      />
    </>
  );
};

export default InputPanier;
