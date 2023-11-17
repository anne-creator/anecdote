'use client';
import Link from 'next/link';
import { UserButton, SignedOut, SignedIn, auth } from '@clerk/nextjs';

const Header = async () => {
  // const { userId } = auth();

  return (
    <>
      <nav className="flex justify-end items-center">
        {/* <UserButton afterSignOutUrl="/" /> */}
        <SignedOut>
          <Link href="/sign-up">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-500">
                Sign in or sign up for an account
              </h3>
            </div>
          </Link>
        </SignedOut>
        <SignedIn>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </nav>
    </>
  );
};

export default Header;
