import { saveUser } from '/server/config/mongo/users';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { email, password, firstName, lastName } = req.body;
      const newUser = {
        email,
        password,
        firstName,
        lastName,
        commandes: [],
        __v: 0,
      };
      const { success, error } = await saveUser(newUser);
      if (error) throw new Error(error);

      return res.status(200).json({ success });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} is not allowed.`);
};

export default handler;
