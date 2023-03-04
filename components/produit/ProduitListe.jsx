import React from 'react';
import styles from '/styles/ProduitListe.module.css';
import ProduitParCategorie from './filtration/ProduitParCategorie';

export default function ProduitListe({
  showPanierPanneau,
  toggler,
  categorie,
  paniers,
}) {
  return (
    <div className={styles.container}>
      <ProduitParCategorie
        showPanierPanneau={showPanierPanneau}
        toggler={toggler}
        categorie={categorie}
        paniers={paniers}
      />
    </div>
  );
}
