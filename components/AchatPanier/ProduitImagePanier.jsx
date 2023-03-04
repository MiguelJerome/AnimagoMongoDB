import React from 'react';
import styles from '/styles/Cart.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ProduitImagePanier({
  src,
  alt = 'Default Image',
  averageWidth,
  averageHeight,
  name,
  onClick,
}) {
  const router = useRouter();
  const DEFAULT_WIDTH = 100;
  const DEFAULT_HEIGHT = 100;
  const handleClick = React.useCallback(() => {
    onClick();
    router.push(`/produit/${name}`);
  }, [name, onClick, router]);
  return (
    <Image
      className={`${styles.imgCard} ${styles.img}`}
      src={src}
      alt={alt}
      width={Number(averageWidth) || DEFAULT_WIDTH}
      height={Number(averageHeight) || DEFAULT_HEIGHT}
      priority={true}
      onClick={handleClick}
    />
  );
}

ProduitImagePanier.defaultProps = {
  alt: 'Default Image',
};
