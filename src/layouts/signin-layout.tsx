import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ModeToggle from '@/components/mode-toggle';

const SignInLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <header className="flex h-14 items-center">
      <div className="mx-8 flex w-full items-center justify-between md:container md:mx-auto">
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="flex h-10 w-full gap-2 text-slate-800 dark:text-white"
          >
            <Image
              src="/favicon.svg"
              alt="FilmFiesta"
              width={40}
              height={40}
              // className="w-full"
            />
            <span className="self-end text-xl font-semibold">FilmFiesta</span>
          </Link>
        </div>
        <ModeToggle />
      </div>
    </header>
    <main className="flex h-[calc(100vh-3.5rem)] items-center justify-center">
      {children}
    </main>
  </>
);

export default SignInLayout;
