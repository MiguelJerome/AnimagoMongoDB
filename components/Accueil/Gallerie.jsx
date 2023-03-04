import { useRouter } from 'next/router';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from '/styles/Gallerie.module.css';
// <div key={index} className={styles.container} style={index === 5 && !toggler ? { zIndex:-1 } : null}>
function Gallerie({ images, toggler }) {
  const router = useRouter();

  return (
    <div className={styles.gallerie}>
      {images.map((imageData, index) => (
        <div key={index} className={styles.container}>
          <Image
            src={imageData.src}
            alt={
              imageData.alt || imageData.name
                ? `${imageData.alt || imageData.name}`
                : ''
            }
            width={imageData.width}
            height={imageData.height}
            priority={true}
          />
          <p className={styles.text}>{imageData.categorie}</p>
          <button
            className={styles.button}
            onClick={() => router.push(imageData.page)}
          >
            Achetez maintenant
          </button>
        </div>
      ))}
    </div>
  );
}

Gallerie.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallerie;
