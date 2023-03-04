import styles from '/styles/ProduitDescription.module.css';
import ProduitParID from '/components/produit/filtration/ProduitParID';
import { getPaniers } from '/server/config/mongo/paniers';

export default function Produit109({ panier }) {
  return (
    <div className={styles.container}>
      <ProduitParID productId={109} panier={panier} />
    </div>
  );
}

export async function getServerSideProps() {
  const { paniers } = await getPaniers();
  if (!paniers) throw new Error('Failed to fetch paniers');
  // Convert the _id property of each panier to a string
  const paniersStringified = paniers.map((panier) => ({
    ...panier,
    _id: panier._id.toString(),
  }));
  return { props: { panier: paniersStringified } };
}
