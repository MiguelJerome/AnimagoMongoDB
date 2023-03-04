import React from 'react';
import { toast } from 'react-toastify';

const SubmitCheckout = ({
  totalPriceInCart,
  cart,
  setCart,
  setOrders,
  router,
}) => {
  const handleSubmit = () => {
    if (totalPriceInCart === 0) {
      toast.error(
        'Votre panier est vide, vous ne pouvez pas effectuer de commande.',
        {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'error',
          position: 'bottom-right',
        }
      );
      return;
    }

    const productIds = [];
    cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    setOrders([...orders, cart]);

    setCart([]);
    router.push({
      pathname: '/AchatsPanier/HistoriqueCommande',
      query: { orders: JSON.stringify(orders) },
    });
  };

  return <button onClick={handleSubmit}>Passer la commande</button>;
};

export default SubmitCheckout;
