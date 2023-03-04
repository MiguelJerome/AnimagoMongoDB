import React from 'react';
import styles from '/styles/Cart.module.css';
import Image from 'next/image';
import Spinner from '/public/img/spinner.gif';

export default function PanierImageLoadingCommande() {
  return (
    <Image
      src={Spinner}
      alt="Attente commande mise a jour"
      className={styles.imgSpinner}
      priority={true}
    />
  );
}
