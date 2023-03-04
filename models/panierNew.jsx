import produits from './produits';

const paniers = [
  {
    _id: 100,
    produits: [produits[0]],
    quantiteAchat: 2,
    purchaseTotalQuantitePerProduit: 2,
  },
  {
    _id: 101,
    produits: [produits[1]],
    quantiteAchat: 1,
    purchaseTotalQuantitePerProduit: 1,
  },
  {
    _id: 102,
    produits: [produits[15]],
    quantiteAchat: 3,
    purchaseTotalQuantitePerProduit: 3,
  },
];
/*
console.log(produits[0]);
console.log("hello",paniers.find(paniers => paniers._id === 102).produits[0]);
console.log(produits[2]);
console.log(produits[3]);
*/
export default { produits, paniers };
