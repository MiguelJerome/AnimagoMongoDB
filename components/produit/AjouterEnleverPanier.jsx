import React from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import ClearDepartProduit from '/components/ProduitBindingPanier/ClearDepartProduit/ClearDepartProduit';
import IncrementerProduitCarte from '/components/ProduitBindingPanier/IncrementerProduit/IncrementerProduitCard/IncrementerProduitCard';
import DecrementerProduitCarte from '/components/ProduitBindingPanier/DecrementerProduit/DecrementerProduitCard/DecrementerProduitCard';

export default function AjouterEnleverPanier({
  product,
  stock,
  onQuantityChange,
  quantite,
}) {
  const [, cart, addToCart, setCart] = useCart([]);

  return (
    <div className={styles.achatWrapper}>
      <ClearDepartProduit
        product={product}
        onQuantityChange={onQuantityChange}
      />
      <div>
        <DecrementerProduitCarte
          product={product}
          onQuantityChange={onQuantityChange}
          quantite={quantite}
          addToCart={addToCart}
        />
      </div>
      <div className={styles.panierItemQuantite}>{quantite}</div>
      <IncrementerProduitCarte
        product={product}
        onQuantityChange={onQuantityChange}
        quantite={quantite}
        addToCart={addToCart}
        stock={stock}
      />
    </div>
  );
}
