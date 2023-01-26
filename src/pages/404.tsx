import Link from 'next/link';
import React from 'react';

import { buttonVariants } from '@/components/ui/button';

const NotFoundPage = () => (
  <div className="relative flex min-h-screen items-center justify-center bg-lost bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-black/70" />
    <div className="w-3/4 rounded-lg bg-white bg-opacity-60 p-12 text-center shadow backdrop-blur-sm sm:w-[500px]">
      <h1 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-900">
        Ooops! Page not found
      </h1>
      <p className="mb-8 font-medium text-slate-900">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        className={buttonVariants({
          variant: 'subtle',
          size: 'lg',
        })}
        href="/"
      >
        Go back home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
