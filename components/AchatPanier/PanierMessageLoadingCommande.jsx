import React from 'react';
import styles from '/styles/Cart.module.css';

export default function PanierMessageLoadingCommande({ time }) {
  return <p>La page se rechargera dans {time / 1000} secondes.</p>;
}
