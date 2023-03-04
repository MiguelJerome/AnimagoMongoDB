import React from 'react';
import ProduitParCategorie from '/components/produit/filtration/ProduitParCategorie.jsx';
import ProductDetails from '/components/produit/ProduitDetails.jsx';
import styles from '/styles/ProduitDescription.module.css';
import panier from '/models/panier.jsx';

export default function ProduitParID({ productId, panier }) {
  console.log(productId);
  console.log(panier);
  const product = Array.isArray(panier)
    ? panier.find(({ _id }) => _id === productId.toString())
    : null;
  console.log(product);
  return (
    <div className={styles.container}>
      <ProductDetails product={product || panier} />
    </div>
  );
}
