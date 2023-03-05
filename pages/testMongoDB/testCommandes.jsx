import React from 'react';
import { getCommandesServerSideProps } from '/components/ServerProps/getCommandesServerSideProps';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '/styles/ProduitCard.module.css';

export default function Home({ commandes }) {
  // console.log(commandes);
  const commandesJSON = JSON.parse(JSON.stringify(commandes));

  return (
    <>
      <div className={styles.gallerie}>
        {commandesJSON.map(({ _id, panier, user, date }) => (
          <div key={_id} className={styles.card}>
            <p>Commandes</p>
            <p># {_id}</p>
            <p>Panier :{panier}</p>
            <p>User:{user}</p>
            <p>Date: {date}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export { getCommandesServerSideProps as getServerSideProps };
