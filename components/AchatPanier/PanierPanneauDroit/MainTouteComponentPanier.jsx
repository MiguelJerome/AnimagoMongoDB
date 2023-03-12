import React from 'react';
import styles from '/styles/Cart.module.css';
import Toggler from '/components/Toggler';
import PanierPanneauHeader from '/components/AchatPanier/PanierPanneauDroit/PanierPanneauHeader';
import MainContenuPanneauPanier from '/components/AchatPanier/PanierPanneauDroit/MainContenuPanneauPanier';
import PanierPanneauFooter from '/components/AchatPanier/PanierPanneauDroit/PanierPanneauFooter';
import TotalAchatParItemResultat from '/components/MagasinCalcul/TotalAchatParItemResultat';

const MainTouteComponentPanier = ({
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
  totalItemPurchase,
}) => {
  return (
    <Toggler visible>
      <div
        className={styles.containerZindex}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cart}>
          <PanierPanneauHeader toggler={toggler} />
          <MainContenuPanneauPanier
            cart={cart}
            handleChange={handleChange}
            removeFromCart={removeFromCart}
            router={router}
            submitCheckout={submitCheckout}
            addToCart={addToCart}
            getRemainingStock={getRemainingStock}
            getPurchaseQuantity={getPurchaseQuantity}
            setCart={setCart}
            totalPriceInCart={totalPriceInCart}
            totalItemPurchase={totalItemPurchase}
          />
        </div>
        <PanierPanneauFooter router={router} />
      </div>
    </Toggler>
  );
};

export default MainTouteComponentPanier;
