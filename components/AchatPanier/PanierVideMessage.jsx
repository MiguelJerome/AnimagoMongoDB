import styles from '/styles/Cart.module.css';
import PanierImageLoadingCommande from './PanierImageLoadingCommande';
import PanierMessageLoadingCommande from './PanierMessageLoadingCommande';

export default function PanierVideMessage({ time }) {
  return (
    <>
      <h3 className={styles.emptyCartMessage}>
        <span className={styles.shocked} role="img" aria-label="shocked">
          😱
        </span>
        <p>Vous n&apos;avez encore rien ajouté à votre panier!</p>
        <p>Votre panier est vide.</p>
        <PanierMessageLoadingCommande time={time} />
      </h3>
      <PanierImageLoadingCommande />
    </>
  );
}
