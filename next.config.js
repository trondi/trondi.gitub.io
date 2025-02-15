/** @type {import('next').NextConfig} */

const prefix =
    process.env.NODE_ENV === 'production' ? 'https://trondi.github.io/' : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: prefix,
}

module.exports = nextConfig
