import styles from '/styles/ProduitDescription.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import politiqueDescription from '/components/produit/Description/politiqueDesc.jsx';
import expeditionDescription from '/components/produit/Description/expedition.jsx';
import React, { useState } from 'react';
import Header from '../Header';
import ProduitParCategorie from '/components/produit/filtration/ProduitParCategorie';

export default function ProduitDetails({ product }) {
  const router = useRouter();

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main>
        <div className={styles.containerinfo}>
          <h1 className={styles.title}>{product && product.name}</h1>
          <div className={styles.containerDetail}>
            <div className={`${styles.produitWrapper} ${styles.alignc}`}>
              <Image
                src={product.src}
                alt={product.alt || 'Default Image'}
                width={product.width}
                height={product.height}
                priority={true}
              />
              <p className={styles.p}>Produit#: {product._id}</p>
              <p className={styles.p}>Categorie: {product.categorie}</p>
              <p className={styles.p}>Item en Stock: {product.stock}</p>
              <p className={styles.p}>Prix: C${product.price}</p>
              <button className={styles.button} onClick={() => router.back()}>
                ← Retour aux produits
              </button>
            </div>
            <div className={styles.produitWrapper}>
              <p className={styles.subtitle}>INFORMATION SUR LE PRODUIT</p>
              <p className={styles.description}>{product.description}</p>

              <p className={styles.subtitle}>
                {' '}
                POLITIQUE DE RETOUR ET DE REMBOURSEMENT
              </p>
              <p className={styles.description}>{politiqueDescription}</p>

              <p className={styles.subtitle}>INFORMATIONS D&apos;EXPÉDITION</p>
              <p className={styles.description}>{expeditionDescription}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
