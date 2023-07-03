const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
module.exports = withContentlayer()({
  async rewrites() {
    return [
      {
        source: "api/spotifynow",
        destination: "https://www.darshanaswath.live/api/spotifynow",
      },
    ];
  },
  reactStrictMode: true,
  env: {
    BEARER_TOKEN: process.env.BEARER_TOKEN,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    MUSIC_PLAYLIST_ID: process.env.MUSIC_PLAYLIST_ID,
    PODCAST_PLAYLIST_ID: process.env.PODCAST_PLAYLIST_ID,
  },
  images: {
    domains: [
      "pbs.twimg.com",
      "bit.ly",
      "i.scdn.co",
      "static.raru.co.za",
      "m.media-amazon.com",
      "api.time.com",
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
});
