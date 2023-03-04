import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import { toast } from 'react-toastify';
import MainTouteComponentPanier from '/components/AchatPanier/PanierPanneauDroit/MainTouteComponentPanier';
import styles from '/styles/Header.module.css';
import UpdateProductStockAndSetCart from '/components/ProduitBindingPanier/UpdateProductStockAndSetCart/UpdateProductStockAndSetCart';
import GetterSetterTotalPriceInCart from '/components/ProduitBindingPanier/GetterSetterTotalPriceInCart/GetterSetterTotalPriceInCart';

export default function PanierPanneau({
  toggler,
  cart,
  initCart,
  addToCart,
  removeFromCart,
  setCart,
  getPurchaseQuantity,
  getRemainingStock,
}) {
  //  const [cart, initCart, addToCart, removeFromCart, setCart, getPurchaseQuantity, getRemainingStock ] = useCart();
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);
  /*
  useEffect(() => {
    initCart();
  }, []);
*/
  useEffect(() => {
    calcTotal();
  }, [cart]);

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

  const handleChange = (item, value) => {
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

  const calcTotal = () => {
    let sum = 0;
    if (cart) {
      cart.forEach((item) => {
        if (parseFloat(item.price) && parseFloat(item.purchaseQuantity)) {
          sum += parseFloat(item.price) * parseFloat(item.purchaseQuantity);
        }
      });
    }
    setTotalPriceInCart(parseFloat(sum.toFixed(2)));
  };

  const submitCheckout = async () => {
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
          setCart={setCart}
          getRemainingStock={getRemainingStock}
          getPurchaseQuantity={getPurchaseQuantity}
        />
      </div>
    </>
  );
}

/*
export async function getServerSideProps(context) {
  const [
    cart,
    initCart,
    addToCart,
    removeFromCart,
    setCart,
    getPurchaseQuantity,
    getRemainingStock
  ] = useCart();

  return {
    props: {
      cartProps: [
        cart,
        initCart,
        addToCart,
        removeFromCart,
        setCart,
        getPurchaseQuantity,
        getRemainingStock
      ]
    }
  };
}
*/
