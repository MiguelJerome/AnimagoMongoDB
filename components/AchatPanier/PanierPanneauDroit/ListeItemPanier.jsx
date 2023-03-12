import React from 'react';
import ProduitListeMappingPanier from './ProduitListeMappingPanier';
import GrandTotalMontantResultat from './GrandTotalMontantResultat';
import GrandTotalItemResultat from './GrandTotalItemResultat';
import PanierTitreMessage from './PanierTitreMessage';
import TotalAchatParItemResultat from '/components/MagasinCalcul/TotalAchatParItemResultat';

export default function ListeItemPanier(props) {
  const {
    orders,
    cart,
    handleChange,
    removeFromCart,
    calculateTotal,
    submitCheckout,
    getRemainingStock,
    getPurchaseQuantity,
    setCart,
    totalPriceInCart,
    setOrders,
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
      <GrandTotalMontantResultat
        total={<TotalAchatParItemResultat cart={cart} />}
      />
      <div>
        <GrandTotalItemResultat calculateTotal={calculateTotal} />
      </div>
    </>
  );
}
