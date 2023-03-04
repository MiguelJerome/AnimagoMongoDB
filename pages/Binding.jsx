import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
export { default as PanierVideMessage } from '/components/AchatPanier/PanierVideMessage.jsx';
import BindingTroisComponent from '/components/ProduitBindingPanier/BindingTroisComponent';
import React, { useState } from 'react';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';
import produits from '/models/produits';
import ParentComponentBinding from '/components/ProduitBindingPanier/ParentComponentBinding';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

const inter = Inter({ subsets: ['latin'] });

export default function BindingComponentComboPanierProduit(props) {
  const [visibleState, setVisible] = useState(false);
  const toggler = () => {
    setVisible(!visibleState);
  };

  return (
    <>
      <Header />
      {!visibleState && <PanierPanneau toggler={toggler} />}
      <main></main>
      <Footer />
    </>
  );
}
