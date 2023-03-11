import styles from '/styles/Connexion.module.css';
import { getUsers } from '/server/config/mongo/users';

import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';

export default function Profil(usersServer) {
  console.log(
    'Profil reading user server side props:',
    JSON.stringify(usersServer)
  );
  const router = useRouter();
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
  const users = [
    {
      firstName: 'Bob',
      lastName: 'Gratton',
      email: 'test@gmail.com',
      password: 'test',
    },
  ];

  useEffect(() => {
    if (localStorage.getItem('token-info') !== null) {
      console.log(localStorage.getItem('token-info'));
      const info = JSON.parse(localStorage.getItem('token-info'));
      setFirstName(info.firstName);
      setLastName(info.lastName);
      setEmail(info.email);
      setPassword(info.password);
    }
  }, []);
  console.log('test afficahge nom', users.firstName);
  return (
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.promptWrapper}>
            <button
              className={styles.button}
              onClick={() => router.push('/Accueil')}
            >
              ← Aller à l'accueil
            </button>
          </div>
          <div className={styles.title}>
            <label className={styles.label}>
              {`Bonjour ${firstName} ${lastName},`}
            </label>
            <label className={styles.label}>
              Vous êtes connecté avec l'adresse e-mail : {email}.
            </label>
            <label className={styles.label}>
              Votre mots de passe que vous utiliser est : {password}.
            </label>
          </div>
        </div>
      </main>
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
  return { props: { usersServer: usersStringified } };
}
