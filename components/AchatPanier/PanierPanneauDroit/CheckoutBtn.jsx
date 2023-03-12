import React from 'react';
import Image from 'next/image';
import CheckoutPanier from '/public/img/cart.png';
import styles from '/styles/Cart.module.css';
import GrandTotalItemResultat from '/components/AchatPanier/PanierPanneauDroit/GrandTotalItemResultat';
import { toast } from 'react-toastify';
import SubmitCheckoutMain from '/components/AchatPanier/PanierPanneauDroit/CheckoutPanier/SubmitCheckoutMain';

const CheckoutBtn = ({
  submitCheckout,
  calculateTotal,
  total,
  cart,
  setOrders,
  orders,
  totalPriceInCart,
  totalItemPurchase,
}) => {
  function handleClick() {
    if (
      typeof calculateTotal === 'function' &&
      (calculateTotal() <= 0 || total <= 0)
    ) {
      toast.error('Vous ne pouvez pas Régler la note votre panier est vide', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
        position: 'bottom-right',
      });
    } else if (typeof submitCheckout === 'function') {
      submitCheckout();
    }
  }

  return (
    <>
      <button className={styles.boutonCheckout} onClick={handleClick}>
        <Image
          src={CheckoutPanier}
          alt={'Checkout Panier' || 'Default Image'}
          priority={true}
          className={styles.imgCheckout}
        />
        <p className={styles.checkoutLabel}>Grand Total</p>
        <p className={styles.checkoutLabel}>${total}</p>
        <p className={styles.checkoutLabel}>
          {<GrandTotalItemResultat calculateTotal={calculateTotal} />}
        </p>
        <p className={styles.checkoutLabel}>Régler la note</p>
      </button>
      <SubmitCheckoutMain
        onClick={handleClick}
        cart={cart}
        setOrders={setOrders}
        orders={orders}
        submitCheckout={submitCheckout}
        totalPriceInCart={totalPriceInCart}
        totalItemPurchase={totalItemPurchase}
      />
    </>
  );
};

export default CheckoutBtn;
