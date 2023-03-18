import { saveUsers } from '/server/config/mongo/users';

export async function saveUsersServerSideProps(userId = generateId(), user) {
  try {
    const { users } = await saveUsers();
    const result = await users.updateOne(
      { _id: userId },
      { $set: { serverSideProps: user } }
    );
    if (result.modifiedCount === 0) {
      return {
        props: {
          error: 'Failed to save server-side properties. User not found.',
        },
      };
    }

    return {
      props: {
        success: `Server-side properties for user with id ${userId} were successfully saved.`,
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'Failed to save server-side properties.',
      },
    };
  }
}
