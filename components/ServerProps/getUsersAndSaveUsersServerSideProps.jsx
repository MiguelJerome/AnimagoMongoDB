import { getUsers, saveUser } from '/server/config/mongo/users';

export async function getUsersAndSaveUsersServerSideProps() {
  try {
    const { users } = await getUsers();
    if (!users) throw new Error('Failed to fetch users');

    const usersStringified = users.map((user) => ({
      ...user,
      _id: user._id.toString(),
      commandes: JSON.parse(JSON.stringify(user.commandes)),
    }));

    for (const user of usersStringified) {
      const saveResult = await saveUser(user);
      if (!saveResult.success) throw new Error(saveResult.error);
    }

    return { props: { users: usersStringified } };
  } catch (error) {
    return { props: { error: error.message } };
  }
}
