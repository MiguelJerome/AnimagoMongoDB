import React from 'react';
import styles from '/styles/ProduitCard.module.css';
import DashboardButton from '/components/produit/ProduitItemDashBoardBouton.jsx';

export default function ProduitInfo({
  showPanierPanneau,
  toggler,
  product,
  addToCart,
  updateProductStockAndSetCart,
  handleQuantityChange,
  quantite,
  handleAddProductToCartWithQuantityReset,
  getPurchaseQuantity,
  getRemainingStock,
}) {
  const { _id, name, price, stock } = product;

  return (
    <div className={styles.imageInfo}>
      <p className={styles.imageId}>Produit</p>
      <p className={styles.imageId}>#{_id}</p>
      <p className={styles.imageName}>{name}</p>
      <p className={styles.imagePrice}>C${price}</p>
      <p className={styles.imageStock}>
        <span className={styles.stock}>{getRemainingStock(_id)}</span> items en
        stock
      </p>
      <DashboardButton
        stock={stock}
        depart={quantite}
        product={{ _id, name, price }}
        updateProductStockAndSetCart={updateProductStockAndSetCart}
        handleQuantityChange={handleQuantityChange}
        handleAddProductToCartWithQuantityReset={
          handleAddProductToCartWithQuantityReset
        }
        quantite={quantite}
        toggler={toggler}
        showPanierPanneau={showPanierPanneau}
        addToCart={addToCart}
        getPurchaseQuantity={getPurchaseQuantity}
      />
    </div>
  );
}
