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
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-blue-500">Hello, Welcome to Anectdote</h1>
          <p className="text-gray-600">This is a simple homepage built with Next.js and Clerk</p>
          <SignedIn>
            <div>
              <button className="text-blue-500" onClick={(e) => router.push('/AnecdoteTable')}>
                See task List
              </button>
            </div>
            <div>
              <button className="text-blue-500" onClick={(e) => router.push('/addItem')}>
                generate a new stroy
              </button>{' '}
            </div>
          </SignedIn>
        </div>
      </main>
    </>
  );
}