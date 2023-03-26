import PropTypes from 'prop-types';
import styles from '/styles/Inscription.module.css';

const BoutonInscription = ({ handleFormSubmit, disabled }) => {
  return (
    <div className={styles.promptWrapper}>
      <button
        type="submit"
        className={styles.btnAuthentification}
        onClick={handleFormSubmit}
        disabled={disabled}
      >
        S&apos;inscrire
      </button>
    </div>
  );
};

BoutonInscription.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default BoutonInscription;
