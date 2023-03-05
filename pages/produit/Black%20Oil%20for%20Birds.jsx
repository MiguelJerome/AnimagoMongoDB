import styles from '/styles/ProduitDescription.module.css';
import ProduitParID from '/components/produit/filtration/ProduitParID';
import { getPaniersProps } from '/components/ServerProps/getPaniersProps';

export default function Produit107({ panier }) {
  return (
    <div className={styles.container}>
      <ProduitParID productId={107} panier={panier} />
    </div>
  );
}

export async function getServerSideProps() {
  return await getPaniersProps();
}
