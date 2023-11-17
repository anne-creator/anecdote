import './../globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className=" w-full bg-blue-100">
            <div>{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
