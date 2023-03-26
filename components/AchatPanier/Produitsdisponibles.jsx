import React from 'react';
import styles from '/styles/Cart.module.css';
import ProduitInfoPanier from './ProduitInfoPanier';
import ProduitImagePanier from './ProduitImagePanier';

export function Produitsdisponibles({ produits }) {
  return (
    <>
      <h3 className={styles.subTitle}>Produits disponibles à l&apos;achat :</h3>
      <ul>
        {produits.map(
          ({ _id, src, alt, averageWidth, averageHeight, name, price }) => (
            <li className={styles.produitDisponible} key={_id}>
              <ProduitImagePanier
                src={src}
                alt={alt}
                averageWidth={averageWidth}
                averageHeight={averageHeight}
                name={name}
              />
              <ProduitInfoPanier name={name} price={price} />
            </li>
          )
        )}
      </ul>
    </>
  );
}
