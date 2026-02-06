import React from 'react';

export default function Home() {
  const apis = [
    { name: 'YouTube Downloader', endpoint: '/api/yt?url=[URL]' },
    { name: 'TikTok Downloader', endpoint: '/api/tiktok?url=[URL]' },
    { name: 'Instagram Downloader', endpoint: '/api/instagram?url=[URL]' },
    { name: 'Facebook Downloader', endpoint: '/api/facebook?url=[URL]' },
    { name: 'Twitter Downloader', endpoint: '/api/twitter?url=[URL]' },
    { name: 'Pornhub Downloader', endpoint: '/api/ph?url=[URL]' },
    { name: 'xHamster Downloader', endpoint: '/api/xhamster?url=[URL]' },
    { name: 'QR Code Generator', endpoint: '/api/qrcode?text=[TEXT]' },
    { name: 'URL Shortener', endpoint: '/api/shorten?url=[URL]' },
    { name: 'Weather API', endpoint: '/api/weather?city=[CITY]' },
    { name: 'Currency Converter', endpoint: '/api/currency?from=USD&to=EUR&amount=1' },
    { name: 'Password Generator', endpoint: '/api/password?length=16' },
    { name: 'Screenshot API', endpoint: '/api/screenshot?url=[URL]' },
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Useful APIs for Vercel</h1>
      <p>A collection of 10+ useful APIs ready to be deployed on Vercel.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>API Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Endpoint</th>
          </tr>
        </thead>
        <tbody>
          {apis.map((api, i) => (
            <tr key={i}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{api.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <code>{api.endpoint}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer style={{ marginTop: '40px', fontSize: '0.8em', color: '#666' }}>
        Created for Vercel Hosting
      </footer>
    </div>
  );
}
