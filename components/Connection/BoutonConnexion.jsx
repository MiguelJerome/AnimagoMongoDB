import styles from '/styles/Connexion.module.css';

export default function BoutonConnexion({ handleFormSubmit }) {
  return (
    <div className={styles.promptWrapper}>
      <button
        type="submit"
        className={styles.btnAuthentification}
        onClickCapture={handleFormSubmit}
      >
        Connexion
      </button>
    </div>
  );
}
