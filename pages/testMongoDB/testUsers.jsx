import React from 'react';
import { getUsers } from '/server/config/mongo/users';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '/styles/ProduitCard.module.css';

export default function Home({ users }) {
  console.log('test users:', JSON.stringify(users));
  const usersJSON = JSON.parse(JSON.stringify(users));

  return (
    <>
      <div className={styles.gallerie}>
        {usersJSON.map(
          ({ _id, email, password, firstName, lastName, commandes }) => (
            <div key={_id} className={styles.card}>
              <p>User</p>
              <p>#{_id}</p>
              <p>Email :{email}</p>
              <p>Password:{password}</p>
              <p>Prenom: {firstName}</p>
              <p>Nom: {lastName}</p>
              <p>Commandes: {JSON.stringify(commandes)}</p>
            </div>
          )
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { users } = await getUsers();
  if (!users) throw new Error('Failed to fetch users');
  // Convert the _id property of each user to a string
  const usersStringified = users.map((user) => ({
    ...user,
    _id: user._id.toString(),
    commandes: JSON.stringify(user.commandes),
  }));
  return { props: { users: usersStringified } };
}
