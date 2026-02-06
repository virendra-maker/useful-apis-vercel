import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  const providers = [
    `https://api.vreden.my.id/api/v1/download/pornhub?url=${encodeURIComponent(url)}`,
    `https://api.vreden.web.id/api/phdl?url=${encodeURIComponent(url)}`,
    `https://widipe.com/download/phdl?url=${encodeURIComponent(url)}`,
    `https://api.boxi.my.id/api/download/pornhub?url=${encodeURIComponent(url)}`,
    `https://sandipbaruwal.onrender.com/download?url=${encodeURIComponent(url)}`
  ];

  for (const provider of providers) {
    try {
      const response = await axios.get(provider, { timeout: 10000 });
      if (response.status === 200 && response.data) {
        return res.status(200).json(response.data);
      }
    } catch (e) {
      continue;
    }
  }

  res.status(500).json({ error: 'All Pornhub downloader providers failed. Please try again later.' });
}
