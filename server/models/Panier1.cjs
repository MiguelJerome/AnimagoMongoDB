const mongoose = require('mongoose');

const panierSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  purchaseQuantity: { type: Number, required: true },
  categorie: { type: String, required: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  src: { type: String, required: true },
  alt: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
});

let Panier;

try {
  Panier = mongoose.model('Panier');
} catch (error) {
  Panier = mongoose.model('Panier', panierSchema);
}

module.exports = Panier;
