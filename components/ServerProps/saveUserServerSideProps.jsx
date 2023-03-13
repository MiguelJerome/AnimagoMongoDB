import { getUsers } from '/path/to/user/utilities';
import { saveUser } from '/path/to/user/saver';

export async function saveUsersServerSideProps() {
  const { users } = await getUsers();
  if (!users) throw new Error('Failed to fetch users');
  // Convert the _id property of each user to a string
  const usersStringified = users.map((user) => ({
    ...user,
    _id: user._id.toString(),
    commandes: JSON.parse(JSON.stringify(user.commandes)),
  }));

  // Call saveUser function for each user
  for (const user of usersStringified) {
    const saveResult = await saveUser(user);
    if (!saveResult.success) throw new Error(saveResult.error);
  }

  return { props: { users: usersStringified } };
}
