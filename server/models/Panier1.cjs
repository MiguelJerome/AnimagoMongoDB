const mongoose = require('mongoose');

const panierSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  purchaseQuantity: { type: String, required: true },
  categorie: { type: String, required: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  src: { type: String, required: true },
  alt: { type: String, required: true },
  width: { type: String, required: true },
  height: { type: String, required: true },
});

let Panier;

try {
  Panier = mongoose.model('Panier');
} catch (error) {
  Panier = mongoose.model('Panier', panierSchema);
}

module.exports = Panier;
