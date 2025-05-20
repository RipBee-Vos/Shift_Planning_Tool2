// pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Walmart Shift Planning Tool</title>
      </Head>
      <div className="min-h-screen flex flex-col bg-[#F3F4F6]">
        {/* Header */}
        <header className="bg-[#0072CE] text-white p-4 flex items-center justify-between shadow">
          <div className="flex items-center space-x-2">
            {/* Walmart Spark (optional) */}
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.6 11c.2.3.4.7.4 1s-.1.7-.3 1l1.8 1c.4.2.5.7.3 1.1l-1.6 2.8c-.2.4-.7.5-1.1.3l-1.8-1c-.5.3-1 .4-1.5.5v2.1c0 .4-.3.7-.7.7h-3.2c-.4 0-.7-.3-.7-.7v-2.1c-.5-.1-1.1-.3-1.5-.5l-1.8 1c-.4.2-.9.1-1.1-.3l-1.6-2.8c-.2-.4-.1-.9.3-1.1l1.8-1c-.2-.3-.3-.7-.3-1s.1-.7.3-1l-1.8-1c-.4-.2-.5-.7-.3-1.1l1.6-2.8c.2-.4.7-.5 1.1-.3l1.8 1c.5-.3 1-.4 1.5-.5V3.7c0-.4.3-.7.7-.7h3.2c.4 0 .7.3.7.7v2.1c.5.1 1.1.3 1.5.5l1.8-1c.4-.2.9-.1 1.1.3l1.6 2.8c.2.4.1.9-.3 1.1l-1.7 1z" />
            </svg>
            <span className="font-bold text-xl">Walmart Shift Planning Tool</span>
          </div>
          {/* Potential Nav or sign in */}
          <nav>
            {/* If you have a sign-in button or user info, put it here */}
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Component {...pageProps} />
        </main>

        {/* Footer (Optional) */}
        <footer className="bg-white text-center py-3 text-gray-700 shadow-inner">
          <p className="text-sm">
            For demonstration purposes. Walmart is a trademark of Walmart Inc.
          </p>
        </footer>
      </div>
    </>
  );
}
