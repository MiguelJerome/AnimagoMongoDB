import styles from '/styles/Connexion.module.css';
import { getUsersServerSideProps } from '/components/ServerProps/getUsersServerSideProps';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function Profil({ users }) {
  console.log('Profil reading user server side props:', JSON.stringify(users));
  const router = useRouter();
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token-info') !== null) {
      console.log(localStorage.getItem('token-info'));
    }
  }, []);

  console.log('test afficahge nom', JSON.stringify(users));

  return (
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.promptWrapper}>
            <button
              className={styles.button}
              onClick={() => router.push('/Accueil')}
            >
              ← Aller à l&apos;accueil
            </button>
          </div>
          <div className={styles.title}>
            {users.map((user) => (
              <h2 key={user.id}>
                Bonjour {user.firstName} {user.lastName}
              </h2>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export { getUsersServerSideProps as getServerSideProps };
