import { Inter } from '@next/font/google';
import styles from '/styles/Connexion.module.css';
//import { getUsers } from '/server/config/mongo/users';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { getUsersServerSideProps } from '/components/ServerProps/getUsersServerSideProps';
import BoutonReset from 'components/Connection/BoutonReset';
import BoutonConnexion from '/components/Connection/BoutonConnexion';
import Password from '/components/Connection/Password';
import useConnectionForm from '/components/Connection/useConnectionForm';

export default function Connexion({ users }) {
  const [usersServerSide, setusersServerSide] = useState(users || []);

  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState();

  // const { formData, errorMessage, handleChange, handleSubmit } =
  //   useConnectionForm();
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const account = usersServerSide.find((user) => user.email === email);
    if (account && account.password === password) {
      const userData = { email, password };
      localStorage.setItem('token-info', JSON.stringify(userData));
      localStorage.setItem('isLoggedin', 'true');
      setIsLoggedin(true);
      setFirstName(account.firstName);
      setLastName(account.lastName);
      setEmail(account.email);
      setPassword('');
    }
  };

  useEffect(() => {
    setIsLoggedin(localStorage.getItem('token-info') !== null);
  }, []);

  const handleFormReset = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  };
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
            <form
              className={styles.formAuthentificationWrapper}
              onReset={handleFormReset}
            >
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
              <Password password={password} handleChange={handleChange} />
              <BoutonReset />
              <BoutonConnexion handleFormSubmit={handleFormSubmit} />
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
                {`Bonjour ${firstName} ${lastName},`}
                Vous êtes déjà connecté avec l'adresse e-mail : {email}.
                Souhaitez-vous vous déconnecter ou retourner à l'accueil ?
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

export { getUsersServerSideProps as getServerSideProps };
