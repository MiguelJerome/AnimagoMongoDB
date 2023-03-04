import styles from '/styles/ProduitCard.module.css';
import ProduitItemInfo from '/components/produit/ProduitItemInfo.jsx';
import ProduitItemImage from '/components/produit/ProduitItemImage.jsx';
import React from 'react';
import GetterSetterQuantite from '/components/ProduitBindingPanier/GetterSetterQuantite/GetterSetterQuantite';
import HandleAddProductToCartWithQuantityReset from '/components/ProduitBindingPanier/HandleAddProductToCartWithQuantityReset/HandleAddProductToCartWithQuantityReset';

export default function ProduitItem({
  showPanierPanneau,
  toggler,
  product,
  averageWidth,
  averageHeight,
  router,
  addToCart,
  updateProductStockAndSetCart,
  getPurchaseQuantity,
  getRemainingStock,
}) {
  const { quantite, setQuantite, handleQuantityChange } =
    GetterSetterQuantite();
  const handleAddProductToCartWithQuantityReset =
    HandleAddProductToCartWithQuantityReset({
      product,
      updateProductStockAndSetCart,
      quantite,
      setQuantite,
    });

  return (
    <div
      key={product._id}
      className={`${styles.container} ${styles.containerItem}`}
    >
      <ProduitItemImage
        product={product}
        averageWidth={averageWidth}
        averageHeight={averageHeight}
        router={router}
      />
      <ProduitItemInfo
        product={product}
        updateProductStockAndSetCart={updateProductStockAndSetCart}
        handleQuantityChange={handleQuantityChange}
        quantite={quantite}
        handleAddProductToCartWithQuantityReset={
          handleAddProductToCartWithQuantityReset
        }
        toggler={toggler}
        showPanierPanneau={showPanierPanneau}
        item={product}
        addToCart={addToCart}
        getPurchaseQuantity={getPurchaseQuantity}
        getRemainingStock={getRemainingStock}
      />
    </div>
  );
}
