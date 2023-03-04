import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from '/styles/Cart.module.css';
import CloseIcon from '/public/img/FermerPanier.svg';

function PanierPanneauHeader({ toggler }) {
  return (
    <div className={styles.header}>
      <button className={`${styles.bouton}`} onClick={toggler}>
        <Image
          src={CloseIcon}
          alt={'fermer panier' || 'Default Image'}
          priority={true}
          className={styles.closeIcon}
        />
      </button>
      <h2 className={styles.title}>Panier</h2>
    </div>
  );
}

PanierPanneauHeader.propTypes = {
  router: PropTypes.object,
};

export default PanierPanneauHeader;
