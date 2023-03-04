import { useRouter } from 'next/router';
import styles from '/styles/Categorie.module.css';

export default function Categorie() {
  const router = useRouter();

  return (
    <>
      <div className={styles.menuCategorie}>
        <h2 className={styles.h2Categorie}>Choisissez une catégorie:</h2>
        <button
          className={styles.button}
          onClick={() => router.push('/Boutique/toutMagasiner')}
        >
          TOUT MAGASINER
        </button>
        <button
          className={styles.button}
          onClick={() => router.push('/Boutique/chien')}
        >
          CHIENS
        </button>
        <button
          className={styles.button}
          onClick={() => router.push('/Boutique/chat')}
        >
          CHATS
        </button>
        <button
          className={styles.button}
          onClick={() => router.push('/Boutique/oiseau')}
        >
          OISEAUX
        </button>
        <button
          className={styles.button}
          onClick={() => router.push('/Boutique/aquatique')}
        >
          AQUATIQUE
        </button>
        <button
          className={styles.button}
          onClick={() => router.push('/Boutique/petitanimaux')}
        >
          PETIT ANIMAUX
        </button>
        <button
          className={styles.button}
          onClick={() => router.push('/Boutique/reptile')}
        >
          REPTILES
        </button>
      </div>
    </>
  );
}
