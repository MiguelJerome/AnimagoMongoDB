import React from 'react';
import ProduitListeMappingPanier from './ProduitListeMappingPanier';
import GrandTotalMontantResultat from './GrandTotalMontantResultat';
import GrandTotalItemResultat from './GrandTotalItemResultat';
import CheckoutBtn from './CheckoutBtn';
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
        <CheckoutBtn
          submitCheckout={submitCheckout}
          calculateTotal={calculateTotal}
          total={<TotalAchatParItemResultat cart={cart} />}
        />
      </div>
    </>
  );
}
