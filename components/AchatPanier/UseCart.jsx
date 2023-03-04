import { useState } from 'react';
import panier from '/models/panier.jsx';

export const useCart = () => {
  const [cart, setCart] = useState(panier);

  const initCart = () => {
    setCart(panier);
  };

  const addToCart = (product, quantity) => {
    const existingItem = cart.find((p) => p._id === product._id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map((p) => {
        if (p._id === product._id) {
          return { ...p, purchaseQuantity: p.purchaseQuantity + quantity };
        }
        return p;
      });
    } else {
      const initialCartItem = panier.find((p) => p._id === product._id);
      const productWithSrc = {
        ...product,
        purchaseQuantity: quantity,
        src: product.src,
      };

      if (initialCartItem) {
        productWithSrc.stock = initialCartItem.stock;
        productWithSrc.src = initialCartItem.src;
      }

      updatedCart = [...cart, productWithSrc];
    }

    setCart(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((p) => p._id !== item._id);
    setCart(updatedCart);
  };

  const getPurchaseQuantity = (itemId) => {
    const item = cart.find((p) => p._id === itemId);
    if (item) {
      return item.purchaseQuantity;
    }
    return 0;
  };

  const getRemainingStock = (itemId) => {
    const item = cart.find((p) => p._id === itemId);
    if (item) {
      const totalQuantity = item.purchaseQuantity;
      const remainingStock = parseInt(item.stock) - totalQuantity;
      return remainingStock >= 0 ? remainingStock : 0;
    }
    return 0;
  };

  return [
    cart,
    initCart,
    addToCart,
    removeFromCart,
    setCart,
    getPurchaseQuantity,
    getRemainingStock,
  ];
};
