const produitSeeds = require("../seeders/produit.json");
const panierSeeds = require("../seeders/panier2.json");
const commandeSeeds = require("../seeders/commande2.json");
const userSeeds = require("../seeders/user.json");

const db = require("../config/connexion.cjs");
const Produit = require("../models/Produit.cjs");

const Panier = require("../models/Panier1.cjs");
const Commande = require("../models/Commande1.cjs");
const User = require("../models/User.cjs");

db.once("open", async () => {
  try {
    // flush the database for the collections of produits and users
    await Panier.deleteMany({});
    await Commande.deleteMany({});
    await Produit.deleteMany({});
    await User.deleteMany({});

    // create all commandes from the collection commandes
    await Commande.create(commandeSeeds);
    console.log("commandes seeded");

    // create all produits from the collection produits
    await Produit.create(produitSeeds);
    console.log("produits seeded");
    // create all paniers from the collection paniers
    await Panier.create(panierSeeds);
    console.log("Panier seeded");

    // create all users from the collection users
    await User.create(userSeeds);
    console.log("users seeded");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  process.exit();
});
