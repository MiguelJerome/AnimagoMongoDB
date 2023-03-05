import styles from '/styles/ProduitDescription.module.css';
import ProduitParID from '/components/produit/filtration/ProduitParID';
import { getPaniersProps } from '/components/ServerProps/getPaniersProps';

export default function Produit109({ panier }) {
  return (
    <div className={styles.container}>
      <ProduitParID productId={109} panier={panier} />
    </div>
  );
}

export async function getServerSideProps() {
  return await getPaniersProps();
}
