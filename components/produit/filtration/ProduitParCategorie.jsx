import React, { useEffect } from 'react';
import ProduitCard from '../ProduitCard';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';

export default function ProduitParCategorie({
  showPanierPanneau,
  toggler,
  categorie,
  cartProps,
}) {
  // const [
  //   cart = [],
  //   initCart,
  //   addToCart,
  //   removeFromCart,
  //   setCart,
  //   getPurchaseQuantity,
  //   getRemainingStock
  // ] = Array.isArray(cartProps) ? cartProps : [];
  const [
    cart,
    initCart,
    addToCart,
    removeFromCart,
    setCart,
    getPurchaseQuantity,
    getRemainingStock,
  ] = useCart();
  /*
  useEffect(() => {
    initCart();
  }, []);
  */
  const filteredProduits = cart
    ? categorie
      ? cart.filter(
          ({ categorie: produitCategorie }) => produitCategorie === categorie
        )
      : cart
    : [];

  return (
    <main>
      <PanierPanneau
        toggler={toggler}
        cart={cart}
        initCart={initCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        setCart={setCart}
        getPurchaseQuantity={getPurchaseQuantity}
        getRemainingStock={getRemainingStock}
      />

      <ProduitCard
        showPanierPanneau={showPanierPanneau}
        toggler={toggler}
        produits={filteredProduits}
        addToCart={addToCart}
        getPurchaseQuantity={getPurchaseQuantity}
        getRemainingStock={getRemainingStock}
      />
    </main>
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
      cart: cart || [],
      addToCart: addToCart,
      getPurchaseQuantity: getPurchaseQuantity,
      initCart: initCart,
      removeFromCart: removeFromCart,
      setCart: setCart,
      getRemainingStock: getRemainingStock
    },
  };
}
*/
