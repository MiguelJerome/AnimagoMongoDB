import { Inter } from '@next/font/google';
import styles from '/styles/Connexion.module.css';
//import { getUsers } from '/server/config/mongo/users';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getUsersServerSideProps } from '/components/ServerProps/getUsersServerSideProps';
import BoutonReset from 'components/Connection/BoutonReset';
import BoutonConnexion from '/components/Connection/BoutonConnexion';
import Password from '/components/Connection/Password';
import Email from '/components/Connection/Email';
import useConnectionForm from '/components/Connection/useConnectionForm';

export default function Connexion({ users }) {
  const [usersServerSide, setusersServerSide] = useState(users || []);
  const [errorMessage, setErrorMessage] = useState('');

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
    if (!account) {
      setErrorMessage(`Le compte n'existe pas.`);
      toast.error(`Le compte n'existe pas.`, {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
        position: 'bottom-center',
      });
      return;
    }
    if (account && account.password === password) {
      const userData = { email, password };
      localStorage.setItem('token-info', JSON.stringify(userData));
      localStorage.setItem('isLoggedin', 'true');
      setIsLoggedin(true);
      setFirstName(account.firstName);
      setLastName(account.lastName);
      setEmail(account.email);
      setPassword('');
      setErrorMessage('');
      toast.success(
        `F??licitations ! Vous ??tes maintenant connect?? ?? Animago. Profitez pleinement de notre plateforme pour d??couvrir nos contenus exclusifs et participer ?? notre communaut?? passionn??e`,
        {
          hideProgressBar: true,
          autoClose: 5000,
          type: 'success',
          position: 'bottom-center',
        }
      );
    } else {
      setErrorMessage('Le mot de passe est incorrect.');
      toast.error('Le mot de passe est incorrect.', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
        position: 'bottom-center',
      });
    }
  };

  useEffect(() => {
    setIsLoggedin(localStorage.getItem('token-info') !== null);
  }, []);

  const handleFormReset = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    setErrorMessage('');
    toast.success('Formulaire Connexion effac??.', {
      hideProgressBar: true,
      autoClose: 2000,
      type: 'success',
      position: 'bottom-center',
    });
  };
  const logout = () => {
    localStorage.removeItem('token-info');
    localStorage.setItem('isLoggedin', 'false');
    setIsLoggedin(false);
    toast.success(
      `F??licitations ! Vous avez ??t?? d??connect?? avec succ??s de Animago. N'h??sitez pas ?? revenir pour d??couvrir de nouveaux contenus exclusifs et rester en contact avec notre communaut?? passionn??e.`,
      {
        hideProgressBar: true,
        autoClose: 4000,
        type: 'success',
        position: 'bottom-center',
      }
    );
  };

  return (
    <main>
      <ToastContainer />
      <div className={styles.container}>
        {!isLoggedin ? (
          <>
            <div className={styles.promptWrapper}>
              <button
                className={styles.button}
                onClick={() => router.push('/Accueil')}
              >
                ??? Aller ?? l'accueil
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
                ??? Aller ?? l'inscription
              </button>
            </div>
            <form
              className={styles.formAuthentificationWrapper}
              onReset={handleFormReset}
            >
              <div className={styles.title}>
                <h2>Connexion</h2>
              </div>
              <Email
                email={email}
                handleChange={(e) => setEmail(e.target.value)}
                errorMessage="S'il vous pla??t, mettez une adresse email valide"
                regex="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              />
              <Password
                password={password}
                handleChange={handleChange}
                regex="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              />

              <BoutonReset />
              <BoutonConnexion handleFormSubmit={handleFormSubmit} />
              {errorMessage && (
                <div className={styles.errorText}>{errorMessage}</div>
              )}
            </form>
          </>
        ) : (
          <>
            <div className={styles.promptWrapper}>
              <button
                className={styles.button}
                onClick={() => router.push('/Accueil')}
              >
                ??? Aller ?? l'accueil
              </button>
            </div>
            <div className={styles.title}>
              <h2>D??connexion?</h2>
              <label className={styles.label}>
                {`Bonjour ${firstName} ${lastName},`}
                Vous ??tes d??j?? connect?? avec l'adresse e-mail : {email}.
                Souhaitez-vous vous d??connecter ou retourner ?? l'accueil ?
              </label>
            </div>
            <div className={styles.promptWrapper}>
              <button
                className={styles.button}
                onClick={() => router.push('/Accueil')}
                onClickCapture={logout}
              >
                D??connexion
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export { getUsersServerSideProps as getServerSideProps };
