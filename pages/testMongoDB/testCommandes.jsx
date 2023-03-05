import React from 'react';
import { getCommandes } from '/server/config/mongo/commandes';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '/styles/ProduitCard.module.css';

export default function Home({ commandes }) {
  console.log(commandes);
  const commandesJSON = JSON.parse(JSON.stringify(commandes));

  return (
    <>
      <div className={styles.gallerie}>
        {commandesJSON.map(({ _id, panier, user, date }) => (
          <div key={_id} className={styles.card}>
            <p>User</p>
            <p>#{_id}</p>
            <p>Panier :{JSON.stringify(panier)}</p>
            <p>User:{JSON.stringify(user)}</p>
            <p>Date: {JSON.stringify(date)}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
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
