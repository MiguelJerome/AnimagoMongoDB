import { init, users } from '/server/config/mongo/users';

export async function saveUserServerSideProps(
  userId = generateId(),
  serverSideProps
) {
  try {
    if (!users) await init();

    const result = await users.updateOne(
      { _id: userId },
      { $set: { serverSideProps } }
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
