import { Inter } from '@next/font/google';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '/styles/Expedition.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Expedition() {
  return (
    <>
      <Header />
      <main className={styles.bodyExpedition}>
        <div className={styles.contenuExpedition}>
          <p className={styles.titreExpedition}>Expédition & Retours</p>
          <p className={styles.soustitreExpedition}>Politique d'expédition</p>
          <p className={styles.contenuExpedition}>
            Si nous connaissons un volume élevé de commandes, les expéditions
            peuvent être retardées de quelques jours. S'il vous plaît prévoir
            des jours supplémentaires en transit pour la livraison. S'il y a un
            retard important dans l'expédition de votre commande, nous vous
            contacterons par e-mail ou par téléphone.
          </p>

          <h3 className={styles.soustitreExpedition}>
            Politique de retour et d'échange
          </h3>
          <p className={styles.contenuExpedition}>
            Les clients peuvent engager une procédure de retour dans les 7 jours
            à compter de la date de réception. Si le client souhaite retourner
            ses achats, il est en droit de le faire sans nécessairement apporter
            de justification. Le site marchand ne peut le refuser.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
