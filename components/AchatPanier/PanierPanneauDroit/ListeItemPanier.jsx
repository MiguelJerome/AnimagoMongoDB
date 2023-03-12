import React from 'react';
import ProduitListeMappingPanier from './ProduitListeMappingPanier';
import GrandTotalMontantResultat from './GrandTotalMontantResultat';
import GrandTotalItemResultat from './GrandTotalItemResultat';
import PanierTitreMessage from './PanierTitreMessage';

export default function ListeItemPanier(props) {
  const {
    cart,
    handleChange,
    removeFromCart,
    getRemainingStock,
    getPurchaseQuantity,
    setCart,
    totalPriceInCart,
    totalItemPurchase,
  } = props;

  return (
    <>
      <PanierTitreMessage />
      <ProduitListeMappingPanier
        getRemainingStock={getRemainingStock}
        getPurchaseQuantity={getPurchaseQuantity}
        cart={cart}
        handleChange={handleChange}
        removeFromCart={removeFromCart}
        setCart={setCart}
      />
      <GrandTotalMontantResultat totalPriceInCart={totalPriceInCart} />
      <div>
        <GrandTotalItemResultat totalItemPurchase={totalItemPurchase} />
      </div>
    </>
  );
}
