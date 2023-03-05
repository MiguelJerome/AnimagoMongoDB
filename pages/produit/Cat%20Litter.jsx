import styles from '/styles/ProduitDescription.module.css';
import ProduitParID from '/components/produit/filtration/ProduitParID';
import { getPaniersProps } from '/components/ServerProps/getPaniersProps';

export default function Produit103({ panier }) {
  return (
    <div className={styles.container}>
      <ProduitParID productId={103} panier={panier} />
    </div>
  );
}

export async function getServerSideProps() {
  return await getPaniersProps();
}
