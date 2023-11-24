import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-12 md:pt-20 md:pb-20">
          {/* Page header */}
          <div className="min-h-full flex justify-center	items-center">
            <SignUp />
          </div>
        </div>
      </div>
    </section>
  );
}
