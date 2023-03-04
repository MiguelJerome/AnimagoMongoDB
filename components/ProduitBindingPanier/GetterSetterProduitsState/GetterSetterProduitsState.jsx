import React, { useState } from 'react';

export default function GetterSetterProduitsState({ produits, children }) {
  const [produitsState, setProduits] = useState(produits);

  return children({ produitsState, setProduits });
}
