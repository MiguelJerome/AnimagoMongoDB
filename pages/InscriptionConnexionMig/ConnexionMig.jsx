import { Inter } from '@next/font/google';
import styles from '/styles/Connexion.module.css';
//import { getUsers } from '/server/config/mongo/users';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { getUsersServerSideProps } from '/components/ServerProps/getUsersServerSideProps';

export default function Connexion({ users }) {
  const [usersServerSide, setusersServerSide] = useState(users || []);

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const account = usersServerSide.find((user) => user.email === email);
    if (account && account.password === password) {
      const userData = { email, password };
      localStorage.setItem('token-info', JSON.stringify(userData));
      localStorage.setItem('isLoggedin', 'true');
      setIsLoggedin(true);
      setEmail('');
      setPassword('');
    }
  };

  useEffect(() => {
    setIsLoggedin(localStorage.getItem('token-info') !== null);
  }, []);

  const logout = () => {
    localStorage.removeItem('token-info');
    localStorage.setItem('isLoggedin', 'false');
    setIsLoggedin(false);
  };

  return (
    <main>
      <div className={styles.container}>
        {!isLoggedin ? (
          <>
            <div className={styles.promptWrapper}>
              <button
                className={styles.button}
                onClick={() => router.push('/Accueil')}
              >
                ← Aller à l'accueil
              </button>
            </div>
            <div className={styles.promptWrapper}>
              <div className={styles.question}>
                <h2>Nouveau sur ce site ?</h2>
              </div>
              <button
                className={styles.button}
                onClick={() => router.push('/InscriptionConnexion/Inscription')}
              >
                ← Aller à l'inscription
              </button>
            </div>
            <form className={styles.formAuthentificationWrapper}>
              <div className={styles.title}>
                <h2>Connexion</h2>
              </div>
              <div className={styles.promptWrapper}>
                <label className={styles.label} htmlFor="email">
                  Email address:
                </label>
                <input
                  placeholder="tonemail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.promptWrapper}>
                <label className={styles.label} htmlFor="pwd">
                  Password:
                </label>
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.promptWrapper}>
                <button type="reset" className={styles.btnAuthentification}>
                  Reset
                </button>
              </div>
              <div className={styles.promptWrapper}>
                <button
                  type="submit"
                  className={styles.btnAuthentification}
                  onClickCapture={handleFormSubmit}
                >
                  Connexion
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className={styles.promptWrapper}>
              <button
                className={styles.button}
                onClick={() => router.push('/Accueil')}
              >
                ← Aller à l'accueil
              </button>
            </div>
            <div className={styles.title}>
              <h2>Déconnexion?</h2>
              <label className={styles.label}>
                Oups! On dirais que vous etes déjà connecter. Voulez-vous vous
                déconnecter ou retourner a l'accueil?
              </label>
            </div>
            <div className={styles.promptWrapper}>
              <button
                className={styles.button}
                onClick={() => router.push('/Accueil')}
                onClickCapture={logout}
              >
                Déconnexion
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
/*
export async function getServerSideProps() {
  return await getUsersServerSideProps();
}
*/
export { getUsersServerSideProps as getServerSideProps };
/*
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
*/
