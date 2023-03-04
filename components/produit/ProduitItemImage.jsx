import Image from 'next/image';
import styles from '/styles/ProduitCard.module.css';

export default function ProduitItemImage({
  product,
  averageWidth,
  averageHeight,
  router,
}) {
  const { _id, src, alt } = product;

  return (
    <div className={styles.container}>
      <Image
        className={styles.imgCard}
        src={src}
        alt={alt || 'Default Image'}
        width={Number(averageWidth) || 250}
        height={Number(averageHeight) || 250}
        priority={true}
        onClick={() => router.push(`/produit/${product.name}`)}
      />
    </div>
  );
}
