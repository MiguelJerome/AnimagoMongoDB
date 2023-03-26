import { Inter } from '@next/font/google';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '/styles/Politique.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Politque() {
  return (
    <>
      <Header />
      <main className={styles.bodyPolitique}>
        <div className={styles.contenuPolitique}>
          <h1 className={styles.titrePolitique}>Politique du Magasin</h1>
          <h3 className={styles.soustitrePolitique}>Service client</h3>
          <p className={styles.contenuPolitique}>
            La Compagnie AnimaGo! a décidé d&apos;offrir les meilleurs services
            de site Web d&apos;Animal en restant connecté à leurs utilisateurs à
            tout moment de la journée et en créant une expérience unifiée entre
            leurs technologies et leurs utilisateurs à un tout autre niveau.
          </p>
          <p className={styles.contenuPolitique}>
            Nous pensons que chaque utilisateur de notre site Web à une histoire
            à partager et si vous additionnez tous ces différents utilisateurs
            du monde entier qui utiliseront nos services. Les expériences, les
            réflexions et les commentaires d&apos;un utilisateur deviennent un
            livre, mais si vous connectez tout cela avec de nombreux
            utilisateurs, cela devient un AnimaGo!
          </p>

          <h3 className={styles.soustitrePolitique}>
            Confidentialité et sécurité
          </h3>
          <p className={styles.contenuPolitique}>
            Chaque utilisateur qui veut créer un compte avec ses informations de
            façon sécuritaire qui lui permettra plus tard voir l&apos;historique
            des sélections qui ont été faites mais aussi de bénéficier des
            privilèges qui sont reliés aux utilisateurs inscrits.
          </p>

          <h3 className={styles.soustitrePolitique}>
            Plateforme de discussion
          </h3>
          <p className={styles.contenuPolitique}>
            C&apos;est un blogue qui permet à l&apos;administrateur de partager
            des nouvelles en lien au site ou aux produits, ainsi qu&apos;aux
            personnes de partager leurs opinions et recommandations sur les
            produits et de discuter à propos des animaux.
          </p>

          <h3 className={styles.soustitrePolitique}>Méthodes de paiement</h3>
          <ul>
            <li>Cartes de crédit/débit</li>
            <li>PAYPAL</li>
            <li>Paiements hors ligne</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
