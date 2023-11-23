'use client';
import Head from 'next/head';
import { UserButton, SignedOut, SignedIn } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Hero from '@/app/components/hero-home';
import Process from '@/app/components/process';
import FeaturesHome from '@/app/components/features';
import Tabs from '@/app/components/tabs';
import Target from '@/app/components/target';
// import News from '@/app/components/news';
import Newsletter from '@/app/components/newsletter';

export default function Home() {
  const router = useRouter();
  return (
    <>
      {/* head hydrate for auth dependency clerks */}
      <Head>
        <title>Hello Pages Router with Next.js & Clerk</title>
        <meta name="description" content="A simple Hello World homepage using Next.js and Clerk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {/* <Process /> */}
      {/* <FeaturesHome /> */}
      {/* <Tabs /> */}
      {/* <Target /> */}
      {/* <News /> */}
      {/* <Newsletter /> */}
    </>
  );
}
