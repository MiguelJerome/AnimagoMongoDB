import React, { useState } from 'react';

export default function GetterSetterQuantite() {
  const [quantite, setQuantite] = useState(0);

  const handleQuantityChange = (newQuantity) => {
    setQuantite(newQuantity);
  };

  return {
    quantite,
    setQuantite,
    handleQuantityChange,
  };
}
