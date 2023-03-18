import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Menu from './Menu/Menu';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import facebook from '../public/img/facebook.svg';
import instagram from '../public/img/instagram.svg';
import youtube from '../public/img/youtube.svg';
import search from '../public/img/search.png';
import Login from '../public/img/login.png';
import Cart from '../public/img/cart.png';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';

import Carousel from './Carousel';
import ProductCarousel from './ProductCarousel';

export default function Header() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  let userInfo;
  if (typeof window !== 'undefined') {
    userInfo = localStorage.getItem('token-info');
  }
  const { firstName, lastName } = userInfo ? JSON.parse(userInfo) : {};

  const [isLoggedin, setIsLoggedin] = useState();
  useEffect(() => {
    if (localStorage.getItem('token-info') !== null) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, []);

  const logout = () => {
    localStorage.setItem('isLoggedin', 'false');
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/produit/${query}`);
  };

  const [visibleState, setVisible] = useState();

  const toggler = () => {
    setVisible(!visibleState);
  };

  return (
    <>
      <header>
        <div className={styles.headerLivraison}>
          <p className={styles.p}>LIVRAISON GRATUITE - COMMANDEZ AUJOURD'HUI</p>
        </div>
        <div className={`${styles.divRow}`}>
          <p
            className={styles.nomAnimago}
            onClick={() => router.push('/Accueil')}
          >
            ANIMAGO!
          </p>
          <div className={`${styles.top}`}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
              <input
                type="search"
                id="query"
                name="q"
                placeholder="Chercher un produit..."
                className={styles.searchBar}
                value={query}
                onChange={handleChange}
              />
              <button className={styles.searchButton} type="submit">
                <Image
                  src={search}
                  className={styles.searchLogo}
                  alt={'recherce' || 'Default Image'}
                  priority={true}
                />
              </button>
            </form>
            <div className={`${styles.appelezNous}`}>
              <p className={styles.p}>Appelez-nous</p>
              <p className={styles.p}>1(800) ANI-MAGO</p>
            </div>
          </div>
        </div>
        <div className={styles.header2}>
          <div className={styles.headerCarousel}>
            <div className={styles.catchPhrase}>
              <a onClick={() => router.push('https://facebook.com')}>
                <Image
                  src={facebook}
                  alt={'lien pour facebook' || 'Default Image'}
                  className={styles.iconReseaux}
                  priority={true}
                />
              </a>
              <a onClick={() => router.push('https://instagram.com')}>
                <Image
                  src={instagram}
                  alt={'lien pour instagram' || 'Default Image'}
                  className={styles.iconReseaux}
                  priority={true}
                />
              </a>
              <a onClick={() => router.push('https://youtube.com')}>
                <Image
                  src={youtube}
                  alt={'lien pour twitter' || 'Default Image'}
                  className={styles.iconReseaux}
                  priority={true}
                />
              </a>
              <p className={styles.p}>
                Vos articles préférés pour vos animaux préférés.
              </p>
            </div>
            <div className={styles.cacher}>
              <p className={styles.pV2}>Nos nouveautés</p>
              <ProductCarousel />
            </div>
          </div>
          <div
            className={`${styles.menuLogo} ${
              toggler ? styles.rightPanelOn : styles.rightPanelOff
            }`}
          >
            <div className={`${styles.menuProductList}`}>
              {!isLoggedin ? (
                <>
                  <div>
                    <a
                      className={styles.aLogin}
                      onClick={() =>
                        router.push('/InscriptionConnexion/Connexion')
                      }
                    >
                      Connexion
                    </a>
                  </div>
                  <div>
                    <a
                      className={styles.aLogin}
                      onClick={() =>
                        router.push('/InscriptionConnexion/Inscription')
                      }
                    >
                      Inscription
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <a
                    className={styles.aLogin}
                    onClick={() => router.push('/InscriptionConnexion/Profil')}
                  >
                    <Image
                      src={Login}
                      alt={'Info compte' || 'Default Image'}
                      className={styles.loginCart}
                      priority={true}
                    />
                  </a>
                  <div>
                    <p className={styles.welcomeText}>Bienvenue,</p>
                    <p className={styles.welcomeText}>
                      {`${firstName}
                      ${lastName}!`}
                    </p>
                    <a className={styles.aLogin} onClick={logout}>
                      Deconnexion
                    </a>
                  </div>
                </>
              )}
            </div>
            <div className={styles.menuProductList}>
              <a className={styles.aLogin}>
                <Image
                  src={Cart}
                  alt={'lien pour se connecter' || 'Default Image'}
                  className={styles.loginCart}
                  priority={true}
                  onClick={toggler}
                />
              </a>
              <div>
                <a
                  className={styles.aLogin}
                  onClick={() =>
                    router.push('/AchatsPanier/HistoriqueCommande')
                  }
                >
                  Commande Historique{' '}
                </a>
              </div>
              {visibleState && <PanierPanneau toggler={toggler} />}
            </div>
          </div>
        </div>
        <Menu />
      </header>
    </>
  );
}
