import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const response = await axios.get(`https://tinyurl.com/api-create.php?url=${url}`);
    res.status(200).json({ original: url, short: response.data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to shorten URL' });
  }
}
