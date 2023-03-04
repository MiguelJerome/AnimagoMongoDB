import React from 'react';
import styles from '/styles/Cart.module.css';

export default function GrandTotalItemResultat({ calculateTotal }) {
  return <strong>Total item: {calculateTotal}</strong>;
}
