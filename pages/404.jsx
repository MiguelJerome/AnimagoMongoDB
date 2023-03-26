import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/NotFound.module.css';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function NotFound() {
  const router = useRouter();
  const [notFound, setNotFound] = useState(false);
  const noOrdersFoundRef = useRef(false);

  useEffect(() => {
    if (!noOrdersFoundRef.current) {
      noOrdersFoundRef.current = true;
      setNotFound(true);
      toast.error(
        'Nous avons regardé partout pour cette page ! Erreur 404 Page non trouvée',
        {
          hideProgressBar: true,
          autoClose: 3000,
          type: 'error',
          position: 'top-left',
        }
      );
    } else {
      setNotFound(false);
    }
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.h1}>
          Nous avons regardé partout pour cette page !
        </h1>
        <h1 className={styles.h1}>(Erreur 404 Page non trouvée)</h1>
        <h1
          className={styles.emoji}
          role="img"
          aria-label="Face With Rolling Eyes Emoji"
        >
          🙄
        </h1>
      </div>
      <div className={styles.container}>
        <button
          className={`${styles.button} ${styles.h1}`}
          onClick={() => router.back()}
        >
          <h1>← Aller à Accueil</h1>
        </button>
      </div>
    </main>
  );
}
