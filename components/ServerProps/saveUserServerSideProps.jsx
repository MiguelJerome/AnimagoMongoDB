import { init, users } from '/server/config/mongo/users';

export async function saveUserServerSideProps(userId, serverSideProps) {
  try {
    if (!users) await init();

    const result = await users.updateOne(
      { _id: userId },
      { $set: { serverSideProps } }
    );
    if (result.modifiedCount === 0) {
      return {
        error: 'Failed to save server-side properties. User not found.',
      };
    }

    return {
      success: `Server-side properties for user with id ${userId} were successfully saved.`,
    };
  } catch (error) {
    return { error: 'Failed to save server-side properties.' };
  }
}
