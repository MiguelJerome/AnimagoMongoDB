import { Inter } from '@next/font/google';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProduitListe from '../../components/produit/ProduitListe';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';
import styles from '/styles/ProduitListe.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function ToutMagasiner() {
  const [visibleState, setVisible] = useState(false);
  const toggler = () => {
    setVisible(!visibleState);
  };

  return (
    <>
      {!visibleState && <PanierPanneau toggler={toggler} />}
      <main>
        <Header />
        <h1 className={styles.h1}>Tout magasiner</h1>
        <ProduitListe
          showPanierPanneau={visibleState}
          toggler={toggler}
          categorie={undefined}
        />
      </main>
      <Footer />
    </>
  );
}
