import ytdl from 'ytdl-core';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const info = await ytdl.getInfo(url);
    const formats = ytdl.filterFormats(info.formats, 'audioandvideo');
    
    res.status(200).json({
      title: info.videoDetails.title,
      thumbnail: info.videoDetails.thumbnails[0].url,
      duration: info.videoDetails.lengthSeconds,
      formats: formats.map(f => ({
        quality: f.qualityLabel,
        container: f.container,
        url: f.url,
        hasVideo: f.hasVideo,
        hasAudio: f.hasAudio
      }))
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
