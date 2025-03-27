/**
 * Next.js configuration for EasyJoy Game Platform
 * Configures image domains, internationalization and other Next.js settings
 */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add domains for external images if needed
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
} 