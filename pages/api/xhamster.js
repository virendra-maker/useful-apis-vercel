import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    // Using a more reliable adult content downloader API
    const response = await axios.get(`https://api.boxi.my.id/api/download/xhamster?url=${encodeURIComponent(url)}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch xHamster content', details: error.message });
  }
}
