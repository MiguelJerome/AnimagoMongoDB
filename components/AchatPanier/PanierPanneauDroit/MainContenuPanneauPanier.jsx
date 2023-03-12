import React from 'react';
import styles from '/styles/Cart.module.css';
import ContenuPanneauPanier from '/components/AchatPanier/PanierPanneauDroit/ContenuPanneauPanier';
import TotalAchatQuantite from '/components/MagasinCalcul/TotalAchatQuantite';
import TotalAchatParItemResultat from '/components/MagasinCalcul/TotalAchatParItemResultat';
import SubmitCheckoutMain from '/components/AchatPanier/PanierPanneauDroit/CheckoutPanier/SubmitCheckoutMain';

const MainTouteComponentPanier = (props) => {
  const {
    cart,
    handleChange,
    removeFromCart,
    router,
    submitCheckout,
    addToCart,
    toggler,
    getRemainingStock,
    getPurchaseQuantity,
    setCart,
    totalPriceInCart,
    setOrders,
    orders,
    totalItemPurchase,
  } = props;

  return (
    <div className={styles.containerLayout}>
      <section className={styles.section}>
        <ContenuPanneauPanier
          cart={cart}
          handleChange={handleChange}
          removeFromCart={removeFromCart}
          router={router}
          calculateTotal={<TotalAchatQuantite cart={cart} />}
          submitCheckout={submitCheckout}
          addToCart={addToCart}
          getRemainingStock={getRemainingStock}
          getPurchaseQuantity={getPurchaseQuantity}
          setCart={setCart}
          totalPriceInCart={totalPriceInCart}
          setOrders={setOrders}
          orders={orders}
          totalItemPurchase={totalItemPurchase}
        />
      </section>
    </div>
  );
};

export default MainTouteComponentPanier;
