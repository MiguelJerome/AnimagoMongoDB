import styles from '/styles/ProduitCard.module.css';
import AjouterEnleverPanier from './AjouterEnleverPanier';
import ProduitItemBtnAjouterPanier from './PanierItemBtnAjouterPanier';
import HandleCartUpdateWithDepart from '/components/ProduitBindingPanier/HandleCartUpdateWithDepart/HandleCartUpdateWithDepart';

export default function ProduitItemDashBoardBouton({
  showPanierPanneau,
  toggler,
  stock,
  depart,
  product,
  updateProductStockAndSetCart,
  handleQuantityChange,
  handleAddProductToCartWithQuantityReset,
  quantite,
  addToCart,
  getPurchaseQuantity,
}) {
  const { _id, name, price } = product || {};

  const handleCartUpdateWithDepart = HandleCartUpdateWithDepart({
    _id,
    stock,
    quantite,
    updateProductStockAndSetCart,
    handleQuantityChange,
    handleAddProductToCartWithQuantityReset,
  });

  return (
    <div className={styles.dashBoardButton}>
      <AjouterEnleverPanier
        stock={stock}
        depart={depart}
        product={product}
        onQuantityChange={handleQuantityChange}
        handleAddProductToCartWithQuantityReset={
          handleAddProductToCartWithQuantityReset
        }
        quantite={quantite}
        addToCart={addToCart}
        getPurchaseQuantity={getPurchaseQuantity}
      />
      <ProduitItemBtnAjouterPanier
        product={product}
        handleCartUpdateWithDepart={handleCartUpdateWithDepart}
        handleAddProductToCartWithQuantityReset={
          handleAddProductToCartWithQuantityReset
        }
        toggler={toggler}
        showPanierPanneau={showPanierPanneau}
        quantite={quantite}
        addToCart={addToCart}
        getPurchaseQuantity={getPurchaseQuantity}
      />
    </div>
  );
}
