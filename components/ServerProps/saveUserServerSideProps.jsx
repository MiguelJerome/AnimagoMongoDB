import { getUsers, saveUser } from '/server/config/mongo/users';

export async function saveUserServerSideProps() {
  // Get the list of users
  const { users } = await getUsers();
  if (!users) throw new Error('Failed to fetch users');

  // Save a new user
  const newUser = {
    email: 'johndoe@example.com',
    password: 'Test11111',
    firstName: 'Jimmy',
    lastName: 'Clown',
    commandes: [], // Assuming this is an empty array for a new user
  };
  const { success, error } = await saveUser(newUser);

  // Get the updated list of users
  const { users: updatedUsers } = await getUsers();
  if (!updatedUsers) throw new Error('Failed to fetch users');

  // Convert the _id property of each user to a string
  const usersStringified = updatedUsers.map((user) => ({
    ...user,
    _id: user._id.toString(),
    commandes: JSON.parse(JSON.stringify(user.commandes)),
  }));

  return {
    props: {
      successMessage: success || null,
      errorMessage: error,
      users: usersStringified,
    },
  };
}
