import React, { useEffect } from 'react';
import Image from 'next/image';
import CheckoutPanier from '/public/img/cart.png';
import styles from '/styles/Cart.module.css';
import GrandTotalItemResultat from '/components/AchatPanier/PanierPanneauDroit/GrandTotalItemResultat';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

function SubmitCheckoutMain({
  cart,
  setOrders,
  orders,
  totalPriceInCart,
  totalItemPurchase,
  submitCheckout,
  setCart,
  setPanier,
}) {
  const router = useRouter();

  const calculateTotal = () => {
    // Calculate the total price of items in the cart
    let total = 0;
    if (cart && cart.length > 0) {
      cart.forEach((item) => {
        total += item.price * item.purchaseQuantity;
      });
    }
    return total.toFixed(2);
  };

  const handleClick = () => {
    if (
      typeof calculateTotal === 'function' &&
      (calculateTotal() <= 0 || totalPriceInCart <= 0)
    ) {
      toast.error('Vous ne pouvez pas Régler la note votre panier est vide', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
        position: 'bottom-right',
      });
    } else if (typeof submitCheckout === 'function') {
      const productIds = [];
      if (cart && cart.length > 0) {
        cart.forEach((item) => {
          for (let i = 0; i < Number.isInteger(item.purchaseQuantity); i++) {
            productIds.push(item._id);
          }
        });
        setOrders([...orders, cart]);
      }
    }
  };

  useEffect(() => {
    if (orders && orders.length > 0) {
      toast.success(
        `${`Merci d'avoir acheté chez Animago ! Nous apprécions votre confiance en nos produits et services.
      Votre commande a bien été prise en compte et le montant total de votre achat est de $${totalPriceInCart}.
      Nous espérons que vous êtes satisfait de votre achat et nous espérons vous revoir bientôt chez Animago pour de nouveaux achats.`}`,
        {
          hideProgressBar: true,
          autoClose: 3500,
          type: 'success',
          position: 'top-center',
        }
      );
      setCart([]);
      setOrders([]);
      router.push({
        pathname: '/AchatsPanier/HistoriqueCommande',
        query: { orders: JSON.stringify(orders) },
      });
    }
  }, [orders]);

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
