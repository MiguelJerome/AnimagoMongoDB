import { getCommandes } from '/server/config/mongo/commandes';

export async function getCommandesServerSideProps() {
  const { commandes } = await getCommandes();
  if (!commandes) throw new Error('Failed to fetch commandes');
  // Convert the _id property of each user to a string, and stringify the panier and user objects
  const commandesStringified = commandes.map((commande) => ({
    ...commande,
    _id: commande._id.toString(),
    panier: JSON.parse(JSON.stringify(commande.panier)),
    user: JSON.parse(JSON.stringify(commande.user)),
    date: JSON.parse(JSON.stringify(commande.date)),
  }));
  return { props: { commandes: commandesStringified } };
}
