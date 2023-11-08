import Link from 'next/link';
import { UserButton, SignedOut, SignedIn, auth } from '@clerk/nextjs';

const Header = async () => {
  // const { userId } = auth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 mb-5 bg-blue-700">
      <div className="flex items-center">
        <Link href="/">
          <div className="text-lg font-bold text-white uppercase">Clerk App</div>
        </Link>
      </div>
      {/* <div className="flex items-center text-white">
        {!userId && (
          <>
            <Link href="sign-in" className="text-gray-300 hover:text-white mr-4">
              Sign In
            </Link>
            <Link href="sign-up" className="text-gray-300 hover:text-white mr-4">
              Sign Up
            </Link>
          </>
        )}
        {userId && (
          <Link href="profile" className="text-gray-300 hover:text-white mr-4">
            Profile
          </Link>
        )}
        <div className="ml-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div> */}
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
  );
};

export default Header;
