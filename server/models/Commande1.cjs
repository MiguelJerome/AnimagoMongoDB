const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
  panier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Panier',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: { type: Date, default: Date.now, required: true },
});

let Commande;

try {
  Commande = mongoose.model('Commande');
} catch (error) {
  Commande = mongoose.model('Commande', commandeSchema);
}

module.exports = Commande;
