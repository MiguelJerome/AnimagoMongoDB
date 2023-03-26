import { updateProductStock } from '/server/config/mongo/paniers';

const handler = async (req, res) => {
  if (req.method === 'PUT') {
    try {
      const { itemId, newStock } = req.body;
      const { success, error } = await updateProductStock(itemId, newStock);
      if (error) throw new Error(error);

      return res.status(200).json({ success });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['PUT']);
  res.status(405).end(`Method ${req.method} is not allowed.`);
};

export default handler;
