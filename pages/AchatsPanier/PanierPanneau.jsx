import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import MainTouteComponentPanier from '/components/AchatPanier/PanierPanneauDroit/MainTouteComponentPanier';
import styles from '/styles/Header.module.css';
import { savePanierServerSideProps } from '/components/ServerProps/savePanierServerSideProps';
import SubmitCheckoutMain from '/components/AchatPanier/PanierPanneauDroit/CheckoutPanier/SubmitCheckoutMain';
import {
  calcTotal,
  submitCheckout,
} from '/components/AchatPanier/PanierLogic/PanierLogic';
import {
  handleOrder,
  handleChange,
} from '/components/AchatPanier/PanierLogic/PanierOrderLogic';

export default function PanierPanneau({
  toggler,
  cart,
  addToCart,
  removeFromCart,
  setCart,
  getPurchaseQuantity,
  getRemainingStock,
}) {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);
  const [totalItemPurchase, setTotalItemPurchase] = useState(0);
  const [panier, setPanier] = useState([]);

  useEffect(() => {
    calcTotal(cart, setTotalPriceInCart, setTotalItemPurchase);
  }, [cart]);

  handleOrder(orders, setCart, setOrders, totalPriceInCart, router);

  const handleCartChange = (item, value) => {
    handleChange(item, value, cart, setCart, getPurchaseQuantity);
  };

  const handleCheckout = async () => {
    submitCheckout(
      cart,
      setOrders,
      orders,
      totalPriceInCart,
      setCart,
      panier,
      setPanier,
      toast
    );
  };

  return (
    <>
      <div className={`${styles.rightPanel} ${toggler ? 'active' : ''}`}>
        <MainTouteComponentPanier
          cart={cart}
          handleChange={handleCartChange}
          removeFromCart={removeFromCart}
          router={router}
          submitCheckout={handleCheckout}
          addToCart={addToCart}
          toggler={toggler}
          setCart={setCart}
          getRemainingStock={getRemainingStock}
          getPurchaseQuantity={getPurchaseQuantity}
          setOrders={setOrders}
          orders={orders}
          totalPriceInCart={totalPriceInCart}
          totalItemPurchase={totalItemPurchase}
        >
          <SubmitCheckoutMain
            totalPriceInCart={totalPriceInCart}
            totalItemPurchase={totalItemPurchase}
            submitCheckout={handleCheckout}
          />
        </MainTouteComponentPanier>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  // Get the cart from the request
  const { cart } = context.req.body;

  // Save the panier and get the props
  const { panier, error } = await savePanierServerSideProps({ cart });

  // Handle the case where an error occurred while saving the panier
  if (error) {
    console.error(error);
    return { props: {} };
  }

  // Pass the panier props to the page component
  return { props: { panier: panier || null } };
}
