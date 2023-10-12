'use client';

import './globals.css';

import { FC, ReactNode, useEffect, useState } from 'react';

import { DM_Sans } from 'next/font/google';
import LoadingSection from '@/components/organisms/LoadingSection';
import type { Metadata } from 'next';
import { getCookie } from 'cookies-next';
import localFont from 'next/font/local';
import { useAuthStore } from '@/store/authStore';

interface LayoutProps {
  children: ReactNode;
}

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
      path: '../assets/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-BoldItalic.ttf',
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
    icon: 'icon.png',
  },
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const token = getCookie('token');
  const user = getCookie('user');
  const setAuthentication = useAuthStore((state) => state.setAuthentication);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (token && user) {
      setUser(JSON.parse(user));
      setAuthentication(true);
    } else {
      setUser(null);
      setAuthentication(false);
    }
  }, [setAuthentication, setUser, token, user]);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${gilroy.variable} ${dmSans.variable} font-gilroy bg-black text-white text-md`}
      >
        {domLoaded ? (
          children
        ) : (
          <div className="h-screen flex justify-center items-center">
            <LoadingSection />
          </div>
        )}
      </body>
    </html>
  );
};

export default Layout;
