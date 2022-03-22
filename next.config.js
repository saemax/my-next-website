/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: [ 'fr', 'en', 'de', 'it' ],
    defaultLocale: 'fr',
  }
}

module.exports = nextConfig
