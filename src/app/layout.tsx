import './styles/globals.css';

import { DM_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const gilroy = localFont({
  src: [
    {
      path: './fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-gilroy',
});

export const metadata: Metadata = {
  title: 'BoltAbacus',
  description: 'The perfect app to learn and master abacus!',
  icons: {
    icon: './images/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} ${dmSans.variable} font-gilroy`}>
        {children}
      </body>
    </html>
  );
}
