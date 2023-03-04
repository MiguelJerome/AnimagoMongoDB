import React from 'react';
import { getCommandes } from '/server/config/mongo/commandes';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '/styles/ProduitCard.module.css';

export default function Home({ commandes }) {
  console.log('test commandes:', JSON.stringify(commandes));
  const commandesJSON = JSON.parse(JSON.stringify(commandes));

  return (
    <>
      <div className={styles.gallerie}>
        {commandesJSON.map(
          ({ _id, courriel, mot_passe, prenom, nom, commandes }) => (
            <div key={_id} className={styles.card}>
              <p>User</p>
              <p>#{_id}</p>
              <p>Email :{courriel}</p>
              <p>Password:{mot_passe}</p>
              <p>Prenom: {prenom}</p>
              <p>Nom: {nom}</p>
              <p>Commandes: {commandes}</p>
            </div>
          )
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { commandes } = await getCommandes();
  if (!commandes) throw new Error('Failed to fetch commandes');
  // Convert the _id property of each user to a string
  const commandesStringified = commandes.map((user) => ({
    ...user,
    _id: user._id.toString(),
  }));
  return { props: { commandes: commandesStringified } };
}
