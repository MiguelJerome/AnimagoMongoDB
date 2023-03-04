import { useCart } from '/components/AchatPanier/UseCart.jsx';
import styles from '/styles/AjouterEnleverPanier.module.css';

const ClearDepartProduit = ({ product, onQuantityChange, clearInput }) => {
  const [, cart, , setCart] = useCart([]);

  const clearDepart = (newDepart) => {
    const updatedProduct = { ...product, stock: newDepart };
    const updatedCart = Array.isArray(cart)
      ? cart.map((p) => {
          if (p._id === product._id) {
            return updatedProduct;
          } else {
            return p;
          }
        })
      : [];
    setCart(updatedCart);
    onQuantityChange(0);
    onQuantityChange(newDepart);
    if (typeof clearInput === 'function') {
      clearInput(product);
    }
  };

  return (
    <button className={styles.buttonClear} onClick={() => clearDepart(0)}>
      Clear
    </button>
  );
};

export default ClearDepartProduit;
