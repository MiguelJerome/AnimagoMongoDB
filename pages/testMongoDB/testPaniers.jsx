import React, { useState, useEffect } from 'react';
import { getPaniers } from '/server/config/mongo/paniers';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '/styles/ProduitCard.module.css';

export default function Home({ paniers }) {
  const router = useRouter();
  //console.log('test produits:', JSON.stringify(paniers));
  const paniersJSON = JSON.parse(JSON.stringify(paniers));

  return (
    <>
      <div className={styles.gallerie}>
        {paniersJSON.map(({ _id, src, alt, name, price, stock }) => (
          // {produitsState ?? [].map(({ _id, src, alt, name, price, stock }) => (
          <div key={_id} className={styles.imageContainer}>
            <Image
              className={styles.imgCard}
              src={src}
              alt={alt || 'Default Image'}
              width={400}
              height={400}
              onClick={() => router.push(`/produit/${name}`)}
            />
            <div className={styles.imageInfo}>
              <p className={styles.imageId}>Produit</p>
              <p className={styles.imageId}>#{_id}</p>
              <p className={styles.imageName}>{name}</p>
              <p className={styles.imagePrice}>C${price}</p>
              <p className={styles.imageStock}>
                <span className={styles.stock}>{stock}</span> items en stock
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
/*
export async function getServerSideProps() {
  const { paniers } = await getPaniers();
  if (!paniers) throw new Error('Failed to fetch paniers');
  // Convert the _id property of each panier to a string
  const paniersStringified = paniers.map((panier) => ({
    ...panier,
    _id: panier._id.toString(),
  }));
  return { props: { panier: paniersStringified } };
}
*/
export async function getServerSideProps() {
  const { paniers } = await getPaniers();
  if (!paniers) throw new Error('Failed to fetch paniers');
  // Convert the _id property of each panier to a string

  return { props: { paniers } };
}
