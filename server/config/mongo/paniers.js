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
  } catch (error) {
    throw new Error('failed to stablish connection to database');
  }
}

(async () => {
  await init();
})();

export async function getPaniers() {
  try {
    if (!paniers) await init();
    const result = await paniers.find({}).limit(20).toArray();
    return { paniers: result };
  } catch (error) {
    return { error: 'Failed to fetch paniers!' };
  }
}
