import QRCode from 'qrcode';

export default async function handler(req, res) {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  try {
    const url = await QRCode.toDataURL(text);
    res.status(200).json({ qrcode: url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
