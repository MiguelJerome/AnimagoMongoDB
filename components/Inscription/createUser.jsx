async function createUser(email, password, firstName, lastName) {
  try {
    const response = await fetch('/api/mongo/usersSave', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, firstName, lastName }),
    });
    const data = await response.json();
    if (response.ok) {
      const { success, error } = data;
      console.log(success);
      return success;
    } else {
      const { success, error } = data;
      console.error(error);
      throw new Error(error);
    }
  } catch (error) {
    console.error(error.message);
    throw new Error('Failed to create user');
  }
}
