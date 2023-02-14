import Link from 'next/link';
import React from 'react';

import ModeToggle from '@/components/mode-toggle';

const SignInLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <header className="flex h-14 items-center border border-red-500">
      <div className="mx-8 flex w-full items-center justify-between md:container md:mx-auto">
        <Link href="/" className="h-10 w-full text-slate-700 dark:text-white">
          LOGO
        </Link>
        <ModeToggle />
      </div>
    </header>
    <main className="flex h-[calc(100vh-3.5rem)] items-center justify-center">
      {children}
    </main>
  </>
);

export default SignInLayout;
