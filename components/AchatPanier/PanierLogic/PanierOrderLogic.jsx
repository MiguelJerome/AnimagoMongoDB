import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';

export const handleOrder = (
  orders,
  setCart,
  setOrders,
  totalPriceInCart,
  router
) => {
  useEffect(() => {
    if (orders.length > 0) {
      toast.success(
        `${`      Merci d'avoir acheté chez Animago ! Nous apprécions votre confiance en nos produits et services.
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
};

export const handleChange = (
  item,
  value,
  cart,
  setCart,
  getPurchaseQuantity
) => {
  if (Number.isInteger(value)) {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((i) => i._id === item._id);
    if (itemIndex !== -1) {
      const updatedItem = {
        ...updatedCart[itemIndex],
        purchaseQuantity: Math.max(
          Math.min(
            parseInt(value, 10),
            updatedCart[itemIndex]?.stock || getPurchaseQuantity(item._id)
          ),
          0
        ),
      };
      const newCart = [
        ...updatedCart.slice(0, itemIndex),
        updatedItem,
        ...updatedCart.slice(itemIndex + 1),
      ];
      setCart(newCart);
    }
  }
};
