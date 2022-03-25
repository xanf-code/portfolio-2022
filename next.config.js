/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    BEARER_TOKEN: process.env.BEARER_TOKEN
  },
  images: {
    domains: ['pbs.twimg.com'],
  },
}
