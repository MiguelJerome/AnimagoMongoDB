import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '/styles/Cart.module.css';

const ProduitImagePanier = ({ item }) => {
  const { src, alt, name, averageWidth, averageHeight } = item;
  const router = useRouter();

  return (
    <Image
      className={`${styles.imgCard} ${styles.img}`}
      src={src}
      alt={alt || name ? `${alt || name}` : ''}
      width={Number(averageWidth) || 100}
      height={Number(averageHeight) || 100}
      priority={true}
      onClick={() => router.push(`/produit/${name}`)}
    />
  );
};

export default ProduitImagePanier;
