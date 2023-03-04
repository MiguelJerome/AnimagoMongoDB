import { Inter } from '@next/font/google';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import styles from '/styles/Histoire.module.css';
import ChienHistoire from '/public/img/ChienHistoire.png';

const inter = Inter({ subsets: ['latin'] });

export default function Histoire() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.bodyHistoire}>
          <h1 className={styles.titreHistoire}>Notre histoire</h1>
          <div className={styles.histoire}>
            <p>
              Après plusieurs heures de recherche pour trouver un manque service
              au niveau de la communauté, nous avons vu que le marché des
              articles pour animaux, en particulier les livraisons, sont très
              peu disponible.
            </p>
            <p>
              L'équipe AnimaGo! est ravi de montrer leur vision de l'un des
              meilleurs futurs sites Web d'animaliers sur le marché, qui sera
              bientot présenté au monde.
            </p>
          </div>
          <Image
            src={ChienHistoire}
            alt={'Un chien pour histoire' || 'Default Image'}
            className={styles.imgResize}
            priority={true}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
