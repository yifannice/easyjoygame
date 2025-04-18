/**
 * Next.js configuration for EasyJoy Game Platform
 * Configures image domains and other Next.js settings
 */
module.exports = {
  reactStrictMode: true,
  output: 'export', // 生成静态文件到out目录
  poweredByHeader: false, // 移除X-Powered-By头
  images: {
    unoptimized: true // 禁用图片优化以支持静态导出
  }
} 