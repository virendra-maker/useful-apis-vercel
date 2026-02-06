import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const response = await axios.post('https://api.cobalt.tools/api/json', {
      url: url,
    }, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Facebook fetch failed', details: error.message });
  }
}
