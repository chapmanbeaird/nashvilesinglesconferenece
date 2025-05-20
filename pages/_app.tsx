import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nashville Singles Conference 2025 | August 29–31, 2025</title>
        <meta name="description" content="Join us for the Nashville Singles Conference 2025, a weekend to inspire, connect, and celebrate for single adults ages 36+. August 29–31, 2025 in Franklin, TN." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Nashville Singles Conference 2025" />
        <meta property="og:description" content="A weekend to inspire, connect, and celebrate for single adults ages 36+. August 29–31, 2025 in Franklin, TN." />
        <meta property="og:image" content="/images/hero.jpg" />
        <meta property="og:url" content="https://nashvillesinglesconference.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
