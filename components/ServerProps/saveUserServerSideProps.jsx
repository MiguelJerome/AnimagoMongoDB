import { saveUsers } from '/server/config/mongo/users';

export async function saveUsersServerSideProps(user) {
  try {
    const { users } = await saveUsers();
    const existingUser = await users.findOne({ username: user.username });
    if (existingUser) {
      return {
        props: {
          error: 'User already exists!',
        },
      };
    }

    return {
      props: {
        success: `User with id ${result.insertedId} was successfully saved.`,
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'Failed to save user!',
      },
    };
  }
}
