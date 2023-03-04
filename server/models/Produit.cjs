const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
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

let Produit;

try {
  Produit = mongoose.model("Produit");
} catch (error) {
  Produit = mongoose.model("Produit", produitSchema);
}

module.exports = Produit;
