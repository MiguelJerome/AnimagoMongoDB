import React, { useEffect, useState } from 'react';

export default function TotalAchatParItemResultat({ cart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    if (cart) {
      cart.forEach((item) => {
        if (parseFloat(item.price) && parseFloat(item.purchaseQuantity)) {
          sum += parseFloat(item.price) * parseFloat(item.purchaseQuantity);
        }
      });
    }
    setTotal(sum.toFixed(2));
  }, [cart]);

  return isNaN(total) ? '0.00' : Number(total).toFixed(2);
}
