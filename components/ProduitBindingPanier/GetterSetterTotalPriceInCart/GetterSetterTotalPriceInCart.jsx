import { useCart } from '/components/AchatPanier/UseCart.jsx';
import { useEffect, useState } from 'react';

const useTotalPriceInCart = () => {
  const [cart] = useCart();
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      if (parseFloat(item.price) && parseFloat(item.purchaseQuantity)) {
        sum += parseFloat(item.price) * parseFloat(item.purchaseQuantity);
      }
    });
    const totalPrice = parseFloat(sum.toFixed(2));
    setTotalPriceInCart(totalPrice);
  }, [cart]);

  return totalPriceInCart;
};

export default useTotalPriceInCart;
