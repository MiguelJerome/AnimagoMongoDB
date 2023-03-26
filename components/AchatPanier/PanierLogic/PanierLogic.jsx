import { toast } from 'react-toastify';

const updateCartStock = async (cart) => {
  for (const item of cart) {
    const { _id, stock, purchaseQuantity } = item;
    const newStock = stock - purchaseQuantity;
    const response = await fetch('/api/mongo/updatePanier', {
      method: 'PUT',
      body: JSON.stringify({
        itemId: _id,
        newStock: newStock,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.error) {
      console.error(`Error updating stock for item ${_id}: ${data.error}`);
      return;
    }
  }
};

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

export const submitCheckout = async (
  cart,
  setOrders,
  orders,
  totalPriceInCart
) => {
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

  await updateCartStock(cart);
  setOrders([...orders, cart]);
};
