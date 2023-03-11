import { toast } from 'react-toastify';

const SubmitCheckoutMain = ({ cart, setOrders, orders }) => {
  const calculateTotal = () => {
    // Calculate the total price of items in the cart
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.purchaseQuantity;
    });
    return total.toFixed(2);
  };

  const handleClick = () => {
    if (calculateTotal() <= 0) {
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

  return <button onClick={handleClick}>Submit Checkout</button>;
};

export default SubmitCheckoutMain;
