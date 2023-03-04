const mongoose = require("mongoose");
const Commande = require("./Commande1.cjs");

const userSchema = new mongoose.Schema({
  courriel: { type: String, required: true, unique: true },
  mot_passe: { type: String, required: true },
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
  commandes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Commande",
    },
  ],
});

let User;

try {
  User = mongoose.model("User");
} catch (error) {
  User = mongoose.model("User", userSchema);
}

module.exports = User;
