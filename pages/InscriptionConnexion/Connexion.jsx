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

export default function Connexion({ users }) {
  const [usersServerSide, setusersServerSide] = useState(users || []);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orderString, setOrderString] = useState('');
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
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }
    if (account && account.password === password) {
      setFirstName(account.firstName);
      setLastName(account.lastName);
      setOrderString(account.orderString);
      const userData = {
        email,
        password,
        firstName: account.firstName,
        lastName: account.lastName,
        orderString: account.orderString,
      };
      localStorage.setItem('token-info', JSON.stringify(userData));
      localStorage.setItem('isLoggedin', 'true');
      setIsLoggedin(true);
      setEmail(account.email);

      setPassword('');
      setErrorMessage('');
      toast.success(
        `Félicitations ! Vous êtes maintenant connecté à Animago. Profitez pleinement de notre plateforme pour découvrir nos contenus exclusifs et participer à notre communauté passionnée`,
        {
          hideProgressBar: true,
          autoClose: 5000,
          type: 'success',
          position: toast.POSITION.TOP_LEFT,
        }
      );
    } else {
      setErrorMessage('Le mot de passe est incorrect.');
      toast.error('Le mot de passe est incorrect.', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
        position: toast.POSITION.TOP_LEFT,
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
    toast.success('Formulaire Connexion effacé.', {
      hideProgressBar: true,
      autoClose: 2000,
      type: 'success',
      position: toast.POSITION.TOP_LEFT,
    });
  };
  const logout = (event) => {
    localStorage.removeItem('token-info');
    localStorage.setItem('isLoggedin', 'false');
    setIsLoggedin(false);
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setOrderString('');
    setErrorMessage('');
    toast.success(
      `Félicitations ! Vous avez été déconnecté avec succès de Animago. N'hésitez pas à revenir pour découvrir de nouveaux contenus exclusifs et rester en contact avec notre communauté passionnée.`,
      {
        hideProgressBar: true,
        autoClose: 4000,
        type: 'success',
        position: toast.POSITION.TOP_LEFT,
      }
    );
    event.preventDefault();
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
                ← Aller à l&apos;accueil
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
                ← Aller à l&apos;inscription
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
                errorMessage="S'il vous plaît, mettez une adresse email valide"
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
                ← Aller à l&apos;accueil
              </button>
            </div>
            <div className={styles.title}>
              <h2>Déconnexion?</h2>
              <label className={styles.label}>
                {`Bonjour ${firstName} ${lastName},`}
                Vous êtes déjà connecté avec l&apos;adresse e-mail : {email}.
                Souhaitez-vous vous déconnecter ou retourner à l&apos;accueil ?
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
