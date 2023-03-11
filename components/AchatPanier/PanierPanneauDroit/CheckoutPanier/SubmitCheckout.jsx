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

    // Update the panier array with new stock values
    const updatedPanier = panier.map((p) => {
      const item = cart.find((c) => c._id === p._id);
      if (item) {
        return { ...p, stock: p.stock - item.purchaseQuantity };
      }
      return p;
    });

    setOrders([...orders, cart]);
    setCart([]);
    setPanier(updatedPanier); // Update the panier state with the new array

    router.push({
      pathname: '/AchatsPanier/HistoriqueCommande',
      query: { orders: JSON.stringify(orders) },
    });
  };

  return <button onClick={handleSubmit}>Passer la commande</button>;
};

export default SubmitCheckout;
