import React from 'react';
import styles from '/styles/Cart.module.css';
import ProduitImagePanier from './ProduitImagePanier';
import ProduitInfoPanier from './ProduitInfoPanier';
import InputPanier from './InputPanier';
import PoubelleSupprimerPanier from './PoubelleSupprimerPanier';
import GrandTotalParItemResultat from './GrandTotalParItemResultat';

export default function ProduitListeMappingPanier({
  cart,
  handleChange,
  removeFromCart,
  getRemainingStock,
  getPurchaseQuantity,
  setCart,
}) {
  return (
    <ul>
      {cart &&
        cart.map((item) => (
          <React.Fragment key={item._id}>
            {item.purchaseQuantity > 0 && (
              <li className={styles.produitDisponible}>
                <ProduitImagePanier key={item._id} cart={cart} item={item} />
                <div>
                  <ProduitInfoPanier
                    cart={cart}
                    item={item}
                    handleChange={handleChange}
                    getRemainingStock={getRemainingStock}
                    getPurchaseQuantity={getPurchaseQuantity}
                  />
                  <InputPanier
                    cart={cart}
                    item={item}
                    handleChange={handleChange}
                    getRemainingStock={getRemainingStock}
                    getPurchaseQuantity={getPurchaseQuantity}
                  />
                  <PoubelleSupprimerPanier
                    key={item._id}
                    item={item}
                    handleChange={handleChange}
                    removeFromCart={removeFromCart}
                    cart={cart}
                    setCart={setCart}
                  />
                </div>
                <GrandTotalParItemResultat item={item} />
              </li>
            )}
          </React.Fragment>
        ))}
    </ul>
  );
}
