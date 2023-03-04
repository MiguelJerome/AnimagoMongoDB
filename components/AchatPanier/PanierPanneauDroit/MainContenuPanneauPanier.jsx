import React from 'react';
import styles from '/styles/Cart.module.css';
import ContenuPanneauPanier from '/components/AchatPanier/PanierPanneauDroit/ContenuPanneauPanier';
import TotalAchatQuantite from '/components/MagasinCalcul/TotalAchatQuantite';
import TotalAchatParItemResultat from '/components/MagasinCalcul/TotalAchatParItemResultat';

const MainContenuPanneauPanier = (props) => {
  const {
    cart,
    handleChange,
    removeFromCart,
    router,
    submitCheckout,
    addToCart,
    getRemainingStock,
    getPurchaseQuantity,
    setCart,
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
        />
      </section>
    </div>
  );
};

export default MainContenuPanneauPanier;
