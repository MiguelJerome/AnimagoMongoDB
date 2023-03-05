import clientPromise from '.';
let client;
let db;
let commandes;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    commandes = await db.collection('commandes');
  } catch (error) {
    throw new Error('failed to stablish connection to database');
  }
}

(async () => {
  await init();
})();

export async function getCommandes() {
  try {
    if (!commandes) await init();
    const result = await commandes.find({}).limit(20).toArray();
    return { commandes: result };
  } catch (error) {
    return { error: 'Failed to fetch commandes!' };
  }
}
