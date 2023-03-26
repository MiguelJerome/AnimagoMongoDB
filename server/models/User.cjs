const mongoose = require('mongoose');
const Commande = require('./Commande1.cjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  commandes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Commande',
    },
    {
      orderString: { type: String },
    },
  ],
  orderString: { type: String }, // Add this field to the schema
});

let User;

try {
  User = mongoose.model('User');
} catch (error) {
  User = mongoose.model('User', userSchema);
}

module.exports = User;
