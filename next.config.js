/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_CLIENT_ID: "72a20b1835c8435583bd5e70ef1b7f84",
    NEXT_PUBLIC_CLIENT_SECRET: "b81e1eab4da14a5c99341b5d22f4228b"
  },
}

module.exports = nextConfig

