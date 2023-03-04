import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import MainTouteComponentPanier from '/components/AchatPanier/PanierPanneauDroit/MainTouteComponentPanier';
import styles from '/styles/Header.module.css';
import GetterSetterTotalPriceInCart from '/components/ProduitBindingPanier/GetterSetterTotalPriceInCart/GetterSetterTotalPriceInCart';
import UpdateProductStockAndSetCart from '/components/ProduitBindingPanier/UpdateProductStockAndSetCart/UpdateProductStockAndSetCart';

export default function PanierPanneau({ toggler }) {
  const [cart, initCart, addToCart, removeFromCart, setCart] = useCart();
  const router = useRouter();
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);
  const [orders, setOrders] = useState([]);
  const [produitsState, setProduitsState] = useState([...cart]);

  useEffect(() => {
    initCart();
  }, []);

  useEffect(() => {
    calcTotal();
    setProduitsState([...cart]);
  }, [cart]);

  const updateProductStockAndSetCart = ({ _id, stock }, quantity) => {
    if (quantity > stock) {
      return;
    }
    const productIndex =
      produitsState && produitsState.length > 0
        ? produitsState.findIndex((p) => p._id === _id)
        : -1;
    if (productIndex === -1) {
      return;
    }
    const updatedProduct = {
      ...produitsState[productIndex],
      stock: stock - quantity,
    };
    const updatedProduits = [
      ...produitsState.slice(0, productIndex),
      updatedProduct,
      ...produitsState.slice(productIndex + 1),
    ];
    setProduitsState(updatedProduits);
  };

  const handleChange = (item, value) => {
    if (Number.isInteger(value)) {
      const updatedCart = [...cart];
      const itemIndex = updatedCart.findIndex((i) => i._id === item._id);
      if (itemIndex !== -1) {
        const initialStock = item.stock;
        const purchaseQuantity =
          value >= 0
            ? Math.min(
                parseInt(value, 10),
                initialStock - item.purchaseQuantity + value
              )
            : 0;
        const diff = item.purchaseQuantity - purchaseQuantity;
        const updatedItem = {
          ...item,
          purchaseQuantity,
          stock: initialStock + diff,
        };
        const newCart = [
          ...updatedCart.slice(0, itemIndex),
          updatedItem,
          ...updatedCart.slice(itemIndex + 1),
        ];
        setCart(newCart);
        if (diff > 0) {
          updateProductStockAndSetCart(
            { _id: item._id, stock: item.stock + diff },
            diff
          );
        }
      }
    }
  };

  const calcTotal = () => {
    let sum = 0;
    cart.forEach((item) => {
      if (parseFloat(item.price) && parseFloat(item.purchaseQuantity)) {
        sum += parseFloat(item.price) * parseFloat(item.purchaseQuantity);
      }
    });
    setTotalPriceInCart(parseFloat(sum.toFixed(2)));
  };

  const submitCheckout = async () => {
    if (totalPriceInCart === 0) {
      alert('Votre panier est vide, vous ne pouvez pas effectuer de commande.');
      return;
    }

    const productIds = [];
    cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    setOrders([...orders, cart]);
  };

  return (
    <>
      <div className={`${styles.rightPanel} ${toggler ? 'active' : ''}`}>
        <MainTouteComponentPanier
          cart={cart}
          handleChange={handleChange}
          removeFromCart={removeFromCart}
          router={router}
          submitCheckout={submitCheckout}
          addToCart={addToCart}
          toggler={toggler}
        />
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  /*
            const props = {
              components: {
                InputPanier,
                ProduitInfoPanier,
                ProduitItemDashBoardBouton,
              },
            };
            */
  const props = {
    components: {
      ProduitInfoPanier,
    },
  };
  return {
    props,
  };
}
