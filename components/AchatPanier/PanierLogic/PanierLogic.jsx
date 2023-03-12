import { toast } from 'react-toastify';
export const calcTotal = (cart, setTotalPriceInCart, setTotalItemPurchase) => {
  let sum = 0;
  let totalItemPurchase = 0;
  if (cart) {
    cart.forEach((item) => {
      if (parseFloat(item.price) && parseFloat(item.purchaseQuantity)) {
        sum += parseFloat(item.price) * parseFloat(item.purchaseQuantity);
        totalItemPurchase += parseInt(item.purchaseQuantity);
      }
    });
  }
  setTotalPriceInCart(parseFloat(sum.toFixed(2)));
  setTotalItemPurchase(totalItemPurchase);
};

export const submitCheckout = (cart, setOrders, orders, totalPriceInCart) => {
  if (totalPriceInCart <= 0) {
    toast.warning(
      'Votre panier est actuellement vide. Pour pouvoir effectuer une commande, veuillez ajouter des produits à votre panier.',
      {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'warning',
        position: 'bottom-right',
      }
    );
    return;
  }

  const productIds = [];
  cart.forEach((item) => {
    for (let i = 0; i < Number.isInteger(item.purchaseQuantity); i++) {
      productIds.push(item._id);
    }
  });
  setOrders([...orders, cart]);
};
