import React, { useState, useEffect } from 'react';

export default function DimensionsMoyennesImages({
  produitsState,
  products,
  orders,
  children,
}) {
  const [averageWidth, setAverageWidth] = useState(0);
  const [averageHeight, setAverageHeight] = useState(0);

  useEffect(() => {
    if (produitsState || products || orders) {
      const allProducts = orders
        ? orders
            .flatMap((itemsArray) => itemsArray)
            .concat(produitsState || [], products || [])
        : produitsState || products || [];
      const definedProducts = allProducts.filter((p) => p !== undefined);
      setAverageWidth(Math.max(...definedProducts.map((p) => p.width), 0));
      setAverageHeight(Math.max(...definedProducts.map((p) => p.height), 0));
    }
  }, [produitsState, products, orders]);

  return children({ averageWidth, averageHeight });
}
