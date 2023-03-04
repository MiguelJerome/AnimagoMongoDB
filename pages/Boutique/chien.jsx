import { Inter } from '@next/font/google';
import React, { useState } from 'react';
const inter = Inter({ subsets: ['latin'] });
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProduitListe from '../../components/produit/ProduitListe';
import styles from '/styles/ProduitListe.module.css';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';

export default function Chien() {
  const [visibleState, setVisible] = useState(false);
  const toggler = () => {
    setVisible(!visibleState);
  };
  return (
    <>
      <Header />
      {!visibleState && <PanierPanneau toggler={toggler} />}
      <main>
        <h1 className={styles.h1}>Chiens</h1>
        <ProduitListe
          showPanierPanneau={visibleState}
          toggler={toggler}
          categorie="chien"
        />
      </main>
      <Footer />
    </>
  );
}
