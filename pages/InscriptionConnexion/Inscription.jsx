import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });
import styles from '/styles/Inscription.module.css';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

//import { useMutation } from '@apollo/client';
//import Auth from '../utils/auth';
//import { ADD_USER } from '../utils/mutations';

export default function Inscription() {
  const router = useRouter();
  //Reference: https://www.geeksforgeeks.org/how-to-log-out-user-from-app-using-reactjs/
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);

  const signUp = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
  };

  const login = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
    localStorage.setItem('token-info', JSON.stringify(userData));
    localStorage.setItem('isLoggedin', 'true');
    setIsLoggedin(true);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };
  const logout = () => {
    localStorage.removeItem('token-info');
    localStorage.setItem('isLoggedin', 'false');
    setIsLoggedin(false);
  };

  useEffect(() => {
    if (localStorage.getItem('token-info') !== null) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, []);
  return (
    <>
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
                  <h2>Déjà membre?</h2>
                </div>
                <button
                  className={styles.button}
                  onClick={() => router.push('/InscriptionConnexion/Connexion')}
                >
                  ← Aller à Connexionn
                </button>
              </div>
              <form className={styles.formAuthentificationWrapper}>
                <div className={styles.title}>
                  <h2>Inscription</h2>
                </div>
                <div className={styles.promptWrapper}>
                  <label className={styles.label} htmlFor="firstName">
                    Prénom:
                  </label>
                  <input
                    placeholder="Prénom"
                    onChange={(e) => setFirstName(e.target.value)}
                    name="firstName"
                    type="firstName"
                    id="firstName"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.promptWrapper}>
                  <label className={styles.label} htmlFor="lastName">
                    Nom:
                  </label>
                  <input
                    placeholder="Nom"
                    onChange={(e) => setLastName(e.target.value)}
                    name="lastName"
                    type="lastName"
                    id="lastName"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.promptWrapper}>
                  <label className={styles.label} htmlFor="email">
                    Email:
                  </label>
                  <input
                    placeholder="exemple@test.com"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    id="email"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.promptWrapper}>
                  <label className={styles.label} htmlFor="pwd">
                    Password:
                  </label>
                  <input
                    placeholder="******"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    id="pwd"
                    className={styles.input}
                    required
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
                    onClickCapture={login}
                    className={styles.btnAuthentification}
                  >
                    S'inscrire
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
    </>
  );
}
