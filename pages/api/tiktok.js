import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    // Using a public tiktok downloader API for logic
    const response = await axios.get(`https://api.tiklydown.eu.org/api/download?url=${url}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch TikTok video' });
  }
}
