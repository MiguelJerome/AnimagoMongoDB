import clientPromise from '.';

let client;
let db;
let paniers;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    paniers = await db.collection('paniers');
    console.log('Database connection established successfully');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to establish connection to database');
  }
}

(async () => {
  try {
    await init();
  } catch (error) {
    console.error(error);
  }
})();

export async function getPaniers() {
  try {
    if (!paniers) await init();
    const result = await paniers.find({}).limit(20).toArray();
    return { paniers: result };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to fetch paniers!' };
  }
}

export async function savePanier(panier) {
  try {
    if (!paniers) await init();
    const result = await paniers.insertOne(panier);
    return { success: true, panier: result.ops[0] };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to save panier!' };
  }
}

export async function updateProductStock(itemId, newStock) {
  try {
    if (!paniers) await init();
    const result = await paniers.updateOne(
      { _id: itemId },
      { $set: { stock: newStock } }
    );
    return { success: true, result };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to update product stock!' };
  }
}
