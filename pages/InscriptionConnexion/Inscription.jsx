import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });
import styles from '/styles/Inscription.module.css';
//import { getUsers } from '/server/config/mongo/users';
import ConfirmPassword from '/components/Inscription/ConfirmPassword';
import BoutonReset from 'components/Inscription/BoutonReset';
//import BoutonConnexion from '/components/Connection/BoutonConnexion';
import Prenom from '/components/Inscription/Prenom';
import Nom from '/components/Inscription/Nom';
import Password from '/components/Connection/Password';
import Email from '/components/Connection/Email';
import { getUsersServerSideProps } from '/components/ServerProps/getUsersServerSideProps';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import { useInscriptionForm } from '/components/Inscription/useInscriptionForm';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BoutonInscription from '@/components/Inscription/BoutonInscription';

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
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    setIsFormValid(
      nameRegex.test(firstName) &&
        nameRegex.test(lastName) &&
        emailRegex.test(email) &&
        passwordRegex.test(password) &&
        password === confirmPassword
    );
  };

  useEffect(() => {
    checkFormValidity();
  }, [firstName, lastName, email, password, confirmPassword]);

  // const { formData, errorMessage, handleChange, handleSubmit } =
  //   useConnectionForm();
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    // Check if the email already exists in the users list
    const account = usersServerSide.find((user) => user.email === email);
    if (account) {
      setErrorMessage('Les informations correspond a un compte déjà existant.');
      toast.error('Les informations correspond a un compte déjà existant.', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }

    // Check if the password and confirm password match
    if (confirmPassword !== password) {
      setErrorMessage(
        'Le mot de passe ne correspond pas a celui que vous avez confirmé.'
      );
      toast.error(
        'Le mot de passe ne correspond pas a celui que vous avez confirmé.',
        {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'error',
          position: toast.POSITION.TOP_LEFT,
        }
      );
      return;
    }

    // Check if the form is valid
    checkFormValidity();
    if (!isFormValid) {
      toast.error('Veuillez remplir tous les champs correctement.', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }

    // Save the user if the form is valid and passwords match
    const userData = { lastName, firstName, email, password };
    localStorage.setItem('token-info', JSON.stringify(userData));
    localStorage.setItem('isLoggedin', 'true');
    setIsLoggedin(true);
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setPassword('');
    setConfirmPassword('');

    toast.success(
      'Félicitations ! Vous êtes maintenant inscrit à Animago. Profitez pleinement de notre plateforme pour découvrir nos contenus exclusifs et participer à notre communauté passionnée',
      {
        hideProgressBar: true,
        autoClose: 5000,
        type: 'success',
        position: toast.POSITION.TOP_LEFT,
      }
    );
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
    setConfirmPassword('');
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
                <Prenom
                  firstName={firstName}
                  handleChange={(e) => setFirstName(e.target.value)}
                  errorMessage="Votre prénom doit contenir au moins 2 caractères"
                  regex={/^[a-zA-Z\s]{2,}$/}
                />
                <Nom
                  lastName={lastName}
                  handleChange={(e) => setLastName(e.target.value)}
                  errorMessage="Votre nom doit contenir au moins 2 caractères"
                  regex={/^[a-zA-Z\s]{2,}$/}
                />
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
                <ConfirmPassword
                  confirmPassword={confirmPassword}
                  handleChange={(e) => setConfirmPassword(e.target.value)}
                  regex="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                />
                <BoutonReset handleFormReset={handleFormReset} />
                <BoutonInscription
                  handleFormSubmit={handleFormSubmit}
                  disabled={false}
                />
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
                  Oups! On dirais que vous êtes déjà connecté(e),
                  {` ${firstName} 
                  ${lastName} (${email})`}
                  . Voulez-vous vous déconnecter ou retourner à l'accueil?
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
