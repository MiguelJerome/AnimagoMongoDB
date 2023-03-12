import React from 'react';
import ListeItemPanier from './ListeItemPanier';
import SubmitCheckoutMain from '/components/AchatPanier/PanierPanneauDroit/CheckoutPanier/SubmitCheckoutMain';

function ContenuPanneauPanier({
  cart,
  handleChange,
  removeFromCart,
  router,
  calculateTotal,
  submitCheckout,
  addToCart,
  getRemainingStock,
  getPurchaseQuantity,
  setCart,
  totalPriceInCart,
  setOrders,
  orders,
  totalItemPurchase,
}) {
  return (
    <>
      <ListeItemPanier
        cart={cart}
        handleChange={handleChange}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        router={router}
        calculateTotal={calculateTotal}
        submitCheckout={submitCheckout}
        getRemainingStock={getRemainingStock}
        getPurchaseQuantity={getPurchaseQuantity}
        setCart={setCart}
        totalPriceInCart={totalPriceInCart}
        setOrders={setOrders}
        orders={orders}
        totalItemPurchase={totalItemPurchase}
      />
      <SubmitCheckoutMain
        totalPriceInCart={totalPriceInCart}
        totalItemPurchase={totalItemPurchase}
        submitCheckout={submitCheckout}
      />
    </>
  );
}

export default ContenuPanneauPanier;
