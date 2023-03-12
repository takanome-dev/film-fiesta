import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';

import ModeToggle from '@/components/mode-toggle';
import SearchInput from '@/components/search-input';
import { Button } from '@/components/ui/button';
import UserAvatar from '@/components/user-avatar';

interface Props {
  toggleMobileNav: () => void;
}

const Header: React.FC<Props> = (props) => (
  <header className="sticky top-0 z-20 flex h-16 w-full items-center border-b border-b-slate-200 bg-white/50 backdrop-blur-md dark:border-b-slate-700 dark:bg-slate-900/40">
    <div className="mx-8 flex w-full items-center justify-between 2xl:container 2xl:mx-auto">
      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="flex h-10 w-full gap-2 text-slate-800 dark:text-white"
        >
          <Image src="/favicon.svg" alt="FilmFiesta" width={40} height={40} />
          <span className="self-end text-xl font-semibold">FilmFiesta</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <SearchInput />
        <ModeToggle />
        <UserAvatar />
        <Button
          variant="ghost"
          size="sm"
          className="sm:hidden"
          onClick={props.toggleMobileNav}
        >
          <CgMenuRightAlt className="h-6 w-6" />
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
