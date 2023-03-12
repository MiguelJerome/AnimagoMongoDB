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

export default function PanierPanneau({
  props,
  toggler,
  cart,
  initCart,
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
          handleChange={handleChange}
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
            cart={cart}
            setOrders={setOrders}
            orders={orders}
            totalPriceInCart={totalPriceInCart}
            totalItemPurchase={totalItemPurchase}
            submitCheckout={handleCheckout}
            panier={cart} // Pass the panier variable as a prop
            setCart={setCart}
            setPanier={setPanier} // Pass the setPanier function as a prop
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
