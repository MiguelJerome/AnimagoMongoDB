import { useCart } from '/components/AchatPanier/UseCart.jsx';
import styles from '/styles/AjouterEnleverPanier.module.css';

const ClearInputAndDepart = ({
  product,
  item,
  onQuantityChange,
  handleChange,
}) => {
  const [, cart, , setCart] = useCart([]);

  const clearInput = () => {
    handleChange(item, 0);
  };

  const clearDepart = () => {
    const updatedProduct = { ...product, stock: 0 };
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
  };

  return (
    <button
      className={styles.buttonClear}
      onClick={() => {
        clearInput();
        clearDepart();
      }}
    >
      Clear
    </button>
  );
};

export default ClearInputAndDepart;
