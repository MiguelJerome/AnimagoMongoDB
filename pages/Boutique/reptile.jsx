import React, { useState } from 'react';
import { Inter } from '@next/font/google';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProduitListe from '../../components/produit/ProduitListe';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';
import styles from '/styles/ProduitListe.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Reptile() {
  const [visibleState, setVisible] = useState(false);
  const toggler = () => {
    setVisible(!visibleState);
  };
  return (
    <>
      <Header />
      {!visibleState && <PanierPanneau toggler={toggler} />}
      <main>
        <h1 className={styles.h1}>Reptiles</h1>
        <ProduitListe
          showPanierPanneau={visibleState}
          toggler={toggler}
          categorie="reptile"
        />
      </main>
      <Footer />
    </>
  );
}
