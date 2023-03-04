import React, { useState, useEffect } from 'react';
import { getProduits } from '/server/config/mongo/produits';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '/styles/ProduitCard.module.css';

export default function Home({ produits }) {
  const router = useRouter();
  // console.log('test produits:', JSON.stringify(produits));
  const produitsJSON = JSON.parse(JSON.stringify(produits));

  return (
    <>
      <div className={styles.gallerie}>
        {produitsJSON.map(({ _id, src, alt, name, price, stock }) => (
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

export async function getServerSideProps() {
  const { produits } = await getProduits();
  if (!produits) throw new Error('Failed to fetch produits');
  return { props: { produits } };
}
