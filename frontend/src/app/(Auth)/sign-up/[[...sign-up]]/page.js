import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-full flex justify-center	items-center">
      <SignUp />
    </div>
  );
}
