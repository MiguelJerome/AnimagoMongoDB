import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '/styles/Carousel.module.css';
import products from './products';

const ProductCarousel = () => {
  const router = useRouter();

  const handleClick = (name) => {
    router.push(`/produit/${encodeURIComponent(name)}`);
  };

  const items = products.map((product) => (
    <React.Fragment key={product.id}>
      <button onClick={() => handleClick(product.name)}>
        <Image
          src={product.image}
          alt={product.name || 'Default Image'}
          width={150}
          height={150}
          className={styles.sliderimg}
          priority={true}
        />
      </button>
    </React.Fragment>
  ));

  return (
    <div className={styles.carouselImg} style={{ width: '85vw' }}>
      <AliceCarousel
        autoWidth
        autoPlay
        infinite
        autoPlayInterval="4000"
        items={items}
      />
    </div>
  );
};

export default ProductCarousel;
