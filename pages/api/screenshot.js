export default function handler(req, res) {
  const { url, width = 1280, height = 720 } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  const screenshotUrl = `https://api.screenshotmachine.com/?key=free&url=${encodeURIComponent(url)}&dimension=${width}x${height}`;
  res.status(200).json({ screenshot: screenshotUrl });
}
