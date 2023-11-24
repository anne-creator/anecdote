import './css/style.css';

import { Inter, Architects_Daughter } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';
import { shadesOfPurple } from '@clerk/themes';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: {
          variables: {
            colorBackground: '#19191A',
            colorInputBackground: '#19191A',
            colorAlphaShade: 'white',
            colorText: 'white',
            colorInputText: 'white',
          },
          __type: 'prebuilt_appearance',
        },
        layout: {
          socialButtonsVariant: 'iconButton',
        },
        variables: {
          colorPrimary: '#FFFFFF',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        },
        elements: {
          card: {
            background: 'linear-gradient(180deg, #39269B 0%, #342480 100%)',
          },
          logoImage: {
            filter: 'brightness(0) invert(1)',
          },
          headerTitle: {
            fontSize: '28px',
          },
          headerSubtitle: {
            color: '#FFFFFF',
          },
          main: {
            gap: '2rem',
          },
          socialButtonsProviderIcon__github: {
            filter: 'brightness(0) invert(1)',
          },
          dividerBox: {
            display: 'none',
          },
          formFieldInput: {
            backgroundColor: 'transparent',
          },
          formButtonPrimary: {
            backgroundColor: '#FFFFFF30',
            fontSize: '12px',
            textTransform: 'none',
            '&:focus': {
              backgroundColor: '#FFFFFF15',
            },
            '&:active': {
              backgroundColor: '#FFFFFF15',
            },
            '&:hover': {
              backgroundColor: '#FFFFFF15',
            },
          },
          footer: {
            '& + div': {
              backgroundColor: '#130162',
            },
          },
        },
      }}
    >
      <html lang="en">
        <body
          className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gradient-to-br from-[#1c0431] to-[#101d46] text-gray-200 tracking-tight`}
        >
          <div className="flex flex-col min-h-screen overflow-hidden">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
