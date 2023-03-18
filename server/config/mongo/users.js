import clientPromise from '.';
let client;
let db;
let users;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    users = await db.collection('users');
  } catch (error) {
    throw new Error('failed to stablish connection to database');
  }
}

(async () => {
  await init();
})();

export async function getUsers() {
  try {
    if (!users) await init();
    const result = await users.find({}).limit(20).toArray();
    return { users: result };
  } catch (error) {
    return { error: 'Failed to fetch users!' };
  }
}

export async function saveUser(user) {
  try {
    if (!users) await init();

    const existingUser = await users.findOne({ username: user.username });
    if (existingUser) {
      return { error: 'User already exists!' };
    }

    const result = await users.insertOne(user);
    return {
      success: `User with id ${result.insertedId} was successfully saved.`,
    };
  } catch (error) {
    return { error: 'Failed to save user!' };
  }
}
