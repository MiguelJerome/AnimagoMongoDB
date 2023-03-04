import clientPromise from ".";
let client;
let db;
let produits;

async function init() {
	if (db) return;
	try {
		client = await clientPromise;
		db = await client.db();
		produits = await db.collection("produits");
	} catch (error) {
		throw new Error("failed to stablish connection to database");
	}
}

(async () => {
	await init();
})();

export async function getProduits() {
	try {
		if (!produits) await init();
		const result = await produits.find({}).limit(20).toArray();
		return { produits: result };
	} catch (error) {
		return { error: "Failed to fetch produits!" };
	}
}
