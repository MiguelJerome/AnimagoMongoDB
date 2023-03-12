import React from 'react';
import ProduitListeMappingPanier from './ProduitListeMappingPanier';
import GrandTotalMontantResultat from './GrandTotalMontantResultat';
import GrandTotalItemResultat from './GrandTotalItemResultat';
import CheckoutBtn from './CheckoutBtn';
import PanierTitreMessage from './PanierTitreMessage';
import TotalAchatParItemResultat from '/components/MagasinCalcul/TotalAchatParItemResultat';
import SubmitCheckoutMain from '/components/AchatPanier/PanierPanneauDroit/CheckoutPanier/SubmitCheckoutMain';

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
        totalPriceInCart={totalPriceInCart}
        totalItemPurchase={totalItemPurchase}
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
