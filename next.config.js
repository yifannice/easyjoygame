/**
 * Next.js configuration for EasyJoy Game Platform
 * Configures image domains, internationalization and other Next.js settings
 */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  output: 'standalone', // 优化Cloudflare部署
  poweredByHeader: false, // 移除X-Powered-By头
} 