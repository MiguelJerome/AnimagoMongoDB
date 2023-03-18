import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });
import styles from '/styles/Inscription.module.css';
//import { getUsers } from '/server/config/mongo/users';
import BoutonReset from 'components/Connection/BoutonReset';
import BoutonConnexion from '/components/Connection/BoutonConnexion';
import { getUsersServerSideProps } from '/components/ServerProps/getUsersServerSideProps';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Inscription({ users }) {
  const [usersServerSide, setusersServerSide] = useState(users || []);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState();

  // const { formData, errorMessage, handleChange, handleSubmit } =
  //   useConnectionForm();
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const account = usersServerSide.find((user) => user.email === email);
    if (account) {
      setErrorMessage(`Les informations correspond a un compte déjà existant.`);
      toast.error(`Les informations correspond a un compte déjà existant.`, {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
        position: 'bottom-center',
      });
      return;
    }
    if (!account && confirmPassword === password) {
      const userData = { lastName, firstName, email, password };
      localStorage.setItem('token-info', JSON.stringify(userData));
      localStorage.setItem('isLoggedin', 'true');
      setIsLoggedin(true);
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
      toast.success(
        `Félicitations ! Vous êtes maintenant inscrit à Animago. Profitez pleinement de notre plateforme pour découvrir nos contenus exclusifs et participer à notre communauté passionnée`,
        {
          hideProgressBar: true,
          autoClose: 5000,
          type: 'success',
          position: 'bottom-center',
        }
      );
    } else if (confirmPassword !== password) {
      setErrorMessage(
        'Le mot de passe ne correspond pas a celui que vous avez confirmé.'
      );
      toast.error(
        'Le mot de passe ne correspond pas a celui que vous avez confirmé.',
        {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'error',
          position: 'bottom-center',
        }
      );
    }
  };

  useEffect(() => {
    setIsLoggedin(localStorage.getItem('token-info') !== null);
  }, []);

  const handleFormReset = (event) => {
    event.preventDefault();
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');
    toast.success('Formulaire Inscription effacé.', {
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
      `Félicitations ! Vous avez été déconnecté avec succès de Animago. N'hésitez pas à revenir pour découvrir de nouveaux contenus exclusifs et rester en contact avec notre communauté passionnée.`,
      {
        hideProgressBar: true,
        autoClose: 4000,
        type: 'success',
        position: 'bottom-center',
      }
    );
  };

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
              <form
                className={styles.formAuthentificationWrapper}
                onReset={handleFormReset}
              >
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
                  <label className={styles.label} htmlFor="pwd">
                    Confirm password:
                  </label>
                  <input
                    placeholder="******"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirmpassword"
                    type="password"
                    id="pwd"
                    className={styles.input}
                    required
                  />
                </div>

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

export { getUsersServerSideProps as getServerSideProps };
