export default function TotalAchatQuantite({ cart }) {
  let sum = 0;
  if (cart && cart.forEach) {
    cart.forEach((item) => {
      sum += parseInt(item.purchaseQuantity);
    });
  }
  return sum.toFixed(0);
}
