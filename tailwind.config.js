/**
 * Tailwind CSS configuration for EasyJoy Game Platform
 * Customizes theme colors based on Apple color system
 * Sets up responsive breakpoints and extends default configurations
 */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF', // Apple blue
        background: '#F5F5F7', // Light gray
        text: '#1D1D1F', // Dark gray
        accent: {
          red: '#FF3B30',
          green: '#34C759',
          orange: '#FF9500',
        }
      },
      fontFamily: {
        sans: [
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
        display: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
} 