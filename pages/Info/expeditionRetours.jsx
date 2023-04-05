import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '/styles/Expedition.module.css';
import Image from 'next/image';

import politique from '/public/img/packaging.png';
import retour from '/public/img/return-management.png';

export default function Expedition() {
  return (
    <>
      <Header />
      <div className={styles.titreExpedition}>Expédition & Retours</div>
      <div className={styles.body2Expedition}>
        <div>
          <main>
            <div className={styles.contenuExpedition}>
              <p className={styles.soustitreExpedition}>
                Politique d&apos;expédition
              </p>
              <p>
                Si nous connaissons un volume élevé de commandes, les
                expéditions peuvent être retardées de quelques jours. S&apos;il
                vous plaît prévoir des jours supplémentaires en transit pour la
                livraison. S&apos;il y a un retard important dans
                l&apos;expédition de votre commande, nous vous contacterons par
                e-mail ou par téléphone.
              </p>
              <div className={styles.photoExpedition}>
                <Image
                  src={politique}
                  alt={'Une livraison' || 'Default Image'}
                  className={styles.imgResize}
                  priority={true}
                />
              </div>
              <h3 className={styles.soustitreExpedition}>
                Politique de retour et d&apos;échange
              </h3>
              <p>
                Les clients peuvent engager une procédure de retour dans les 7
                jours à compter de la date de réception. Si le client souhaite
                retourner ses achats, il est en droit de le faire sans
                nécessairement apporter de justification. Le site marchand ne
                peut le refuser.
              </p>
              <div className={styles.photoExpedition}>
                <Image
                  src={retour}
                  alt={'Un retour' || 'Default Image'}
                  className={styles.imgResize}
                  priority={true}
                />
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
