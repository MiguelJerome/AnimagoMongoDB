import React from 'react';

const HandleCartUpdateWithDepart = ({
  _id,
  stock,
  quantite,
  updateProductStockAndSetCart,
  handleQuantityChange,
  handleAddProductToCartWithQuantityReset,
}) => {
  const handleCartUpdateWithDepart = (newDepart) => {
    updateProductStockAndSetCart({ _id, stock }, quantite, () =>
      handleQuantityChange(0)
    );
    handleAddProductToCartWithQuantityReset(newDepart);
  };

  return handleCartUpdateWithDepart;
};

export default HandleCartUpdateWithDepart;
