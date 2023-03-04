import GetterSetterQuantite from '/components/ProduitBindingPanier/GetterSetterQuantite/GetterSetterQuantite';

export default function HandleAddProductToCartWithQuantityReset({
  product,
  updateProductStockAndSetCart,
  quantite,
  setQuantite,
}) {
  const handleAddProductToCartWithQuantityReset = () => {
    updateProductStockAndSetCart(
      { _id: product._id, stock: product.stock },
      quantite
    );
    setQuantite(0);
  };

  return handleAddProductToCartWithQuantityReset;
}
