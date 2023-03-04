import { useState } from 'react';

export default function UpdateProductStockAndSetCart({ produits }) {
  const [produitsState, setProduits] = useState(produits);

  const updateProductStockAndSetCart = ({ _id, stock }, quantity) => {
    if (quantity > stock) {
      return;
    }
    const productIndex = produitsState.findIndex((p) => p._id === _id);
    const updatedProduct = {
      ...produitsState[productIndex],
      stock: stock - quantity,
    };
    const updatedProduits = [
      ...produitsState.slice(0, productIndex),
      updatedProduct,
      ...produitsState.slice(productIndex + 1),
    ];
    setProduits(updatedProduits);
  };

  return { produitsState, setProduits, updateProductStockAndSetCart };
}
