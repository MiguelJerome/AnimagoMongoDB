import React, { useEffect } from 'react';
import Image from 'next/image';
import CheckoutPanier from '/public/img/cart.png';
import styles from '/styles/Cart.module.css';
import GrandTotalItemResultat from '/components/AchatPanier/PanierPanneauDroit/GrandTotalItemResultat';

function SubmitCheckoutMain({
  totalPriceInCart,
  totalItemPurchase,
  submitCheckout,
}) {
  return (
    <button className={styles.boutonCheckout} onClick={submitCheckout}>
      <Image
        src={CheckoutPanier}
        alt={'Checkout Panier' || 'Default Image'}
        priority={true}
        className={styles.imgCheckout}
        onClick={submitCheckout}
      />
      <p className={styles.checkoutLabel}>Grand Total</p>
      <p className={styles.checkoutLabel}>${totalPriceInCart}</p>
      <p className={styles.checkoutLabel}>
        {<GrandTotalItemResultat calculateTotal={totalItemPurchase} />}
      </p>
      <p className={styles.checkoutLabel}>Régler la note</p>
    </button>
  );
}

export default SubmitCheckoutMain;
