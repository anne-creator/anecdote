'use client';

import { Inter } from 'next/font/google';
// import Header from '@/app/components/Header';
import Header from '@/app/components/ui/header';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import PageIllustration from '@/app/components/page-illustration';
import Footer from '@/app/components/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  return (
    <div className={inter.className}>
      <Header />

      <main className="grow">
        <PageIllustration />
        {children}
      </main>
    </div>
  );
}
