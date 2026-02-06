import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  const providers = [
    `https://api.vreden.web.id/api/ytdl?url=${encodeURIComponent(url)}`,
    `https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(url)}`,
    `https://sandipbaruwal.onrender.com/download?url=${encodeURIComponent(url)}`
  ];

  for (const provider of providers) {
    try {
      const response = await axios.get(provider, { timeout: 5000 });
      if (response.status === 200) {
        return res.status(200).json(response.data);
      }
    } catch (e) {
      continue;
    }
  }

  res.status(500).json({ error: 'All downloader providers failed. Please try again later.' });
}
