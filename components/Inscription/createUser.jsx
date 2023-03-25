import { saveUser } from '/server/config/mongo/users';

export async function createUser(email, password, firstName, lastName) {
  try {
    const newUser = {
      email,
      password,
      firstName,
      lastName,
      commandes: [],
      __v: 0,
    };
    const { success, error } = await saveUser(newUser);
    if (error) {
      console.error(error);
      throw new Error(
        `Failed to create user: ${error.message || 'unknown error'}`
      );
    }
    console.log(success);
    return success;
  } catch (error) {
    console.error(error.message);
    throw new Error(`Failed to create user: ${error.message}`);
  }
}
