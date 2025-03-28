/**
 * Root layout component for EasyJoy platform
 * Sets up global page structure, metadata, and includes shared UI elements
 * Wraps all pages with common elements like header and footer
 */
import '../styles/globals.css';
import Header from '../components/Header';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://easyjoygame.online'),
  title: {
    default: 'EasyJoy Games - Play Fun Games Online',
    template: '%s | EasyJoy Games'
  },
  description: 'Enjoy a collection of free online games with EasyJoy. Play puzzle, action, classic and many other types of games directly in your browser.',
  keywords: ['online games', 'free games', 'browser games', 'puzzle games', 'action games', 'classic games'],
  openGraph: {
    title: 'EasyJoy Games - Play Fun Games Online',
    description: 'Enjoy a collection of free online games with EasyJoy.',
    url: 'https://easyjoygame.online',
    siteName: 'EasyJoy Games',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
        <footer className="bg-white shadow-inner py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-primary text-xl font-display font-bold">EasyJoy</span>
                  <span className="text-accent-orange ml-1">Games</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Play free online games anytime, anywhere</p>
              </div>
              <div className="text-sm text-gray-600">
                © {new Date().getFullYear()} EasyJoy Games. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 