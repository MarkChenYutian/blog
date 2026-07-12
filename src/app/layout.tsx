import { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/posts.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import 'katex/dist/katex.min.css';

import { siteConfig } from '@/constant/config';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

// CJK fallback for IBM Plex Sans/Mono, which have no CJK glyphs. Browsers pick
// the nearest of these three cuts per element's font-weight automatically.
const lxgwWenkai = localFont({
  src: [
    {
      path: '../../public/fonts/lxgw-wenkai/LXGWWenKai-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lxgw-wenkai/LXGWWenKai-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lxgw-wenkai/LXGWWenKai-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-lxgw-wenkai',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${plexSans.variable} ${plexMono.variable} ${lxgwWenkai.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
