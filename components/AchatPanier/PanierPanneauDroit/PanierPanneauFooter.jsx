import React from 'react';
import PropTypes from 'prop-types';
import styles from '/styles/Cart.module.css';

const PanierPanneauFooter = ({ router }) => {
  const handleViewCartClick = () => {
    router.push('/AchatsPanier/HistoriqueCommande');
  };

  return (
    <div className={styles.footer}>
      <button
        className={styles.boutonVoirCommande}
        onClick={handleViewCartClick}
      >
        Historique commandes
      </button>
    </div>
  );
};

PanierPanneauFooter.propTypes = {
  router: PropTypes.object.isRequired,
};

export default PanierPanneauFooter;
