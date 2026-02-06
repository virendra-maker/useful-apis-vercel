# Useful APIs for Vercel

This repository contains over 10 useful APIs that can be hosted on Vercel as Serverless Functions.

## APIs Included

1.  **YouTube Downloader**: `/api/yt?url=[URL]`
2.  **TikTok Downloader**: `/api/tiktok?url=[URL]`
3.  **Instagram Downloader**: `/api/instagram?url=[URL]`
4.  **Facebook Downloader**: `/api/facebook?url=[URL]`
5.  **Twitter Downloader**: `/api/twitter?url=[URL]`
6.  **Pornhub Downloader**: `/api/ph?url=[URL]`
7.  **xHamster Downloader**: `/api/xhamster?url=[URL]`
8.  **QR Code Generator**: `/api/qrcode?text=[TEXT]`
9.  **URL Shortener**: `/api/shorten?url=[URL]`
10. **Weather API**: `/api/weather?city=[CITY]`
11. **Currency Converter**: `/api/currency?from=USD&to=EUR&amount=1`
12. **Password Generator**: `/api/password?length=16`
13. **Screenshot API**: `/api/screenshot?url=[URL]`

## How to Deploy

1.  Upload this folder to a GitHub repository.
2.  Connect the repository to Vercel.
3.  Vercel will automatically detect Next.js and deploy.

## Development

Run locally:
```bash
npm install
npm run dev
```

## License
MIT
