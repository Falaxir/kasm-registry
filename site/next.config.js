/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Falaxir',
    description: 'Some of my custom kasm workspaces images',
    icon: '/img/logo.svg',
    listUrl: 'https://falaxir.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Falaxir/kasm-registry/issues/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
