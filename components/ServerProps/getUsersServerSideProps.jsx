import { getUsers } from '/server/config/mongo/users';

export async function getUsersServerSideProps() {
  const { users } = await getUsers();
  if (!users) throw new Error('Failed to fetch users');
  // Convert the _id property of each user to a string
  const usersStringified = users.map((user) => ({
    ...user,
    _id: user._id.toString(),
    commandes: JSON.parse(JSON.stringify(user.commandes)),
  }));
  return { props: { users: usersStringified } };
}
