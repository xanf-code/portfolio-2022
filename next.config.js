/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    BEARER_TOKEN: process.env.BEARER_TOKEN,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN
  },
  images: {
    domains: ['pbs.twimg.com', 'bit.ly', 'i.scdn.co'],
    minimumCacheTTL: 60,
  },
}
