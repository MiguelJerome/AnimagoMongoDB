import { savePanier } from '/server/config/mongo/paniers';

export async function savePanierServerSideProps({ cart }) {
  const result = await savePanier(cart);
  if (result.success) {
    return { panier: result.panier };
  } else {
    return { error: 'Failed to save panier!' };
  }
}
