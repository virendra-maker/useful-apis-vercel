import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  // Comprehensive list of potential public API providers for xHamster
  const providers = [
    `https://api.vreden.my.id/api/v1/download/xhamster?url=${encodeURIComponent(url)}`,
    `https://api.vreden.web.id/api/xhdl?url=${encodeURIComponent(url)}`,
    `https://widipe.com/download/xhamster?url=${encodeURIComponent(url)}`,
    `https://api.boxi.my.id/api/download/xhamster?url=${encodeURIComponent(url)}`,
    `https://sandipbaruwal.onrender.com/download?url=${encodeURIComponent(url)}`,
    `https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(url)}`
  ];

  for (const provider of providers) {
    try {
      const response = await axios.get(provider, { timeout: 10000 });
      // Validate that the response contains useful data
      if (response.status === 200 && response.data) {
        // Different APIs return different structures, we return the raw data so the user can see the result
        return res.status(200).json(response.data);
      }
    } catch (e) {
      console.error(`Provider failed: ${provider}`, e.message);
      continue;
    }
  }

  res.status(500).json({ 
    error: 'All xHamster downloader providers failed.',
    message: 'The video might be restricted, or the external providers are currently undergoing maintenance. Please try a different video or try again later.',
    tested_url: url
  });
}
