import Link from 'next/link';
import { useSession } from 'next-auth/react';

import ModeToggle from '@/components/mode-toggle';
import SearchInput from '@/components/search-input';
import UserAvatar from '@/components/user-avatar';

const Header = () => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <header className="sticky top-0 z-10 flex h-14 w-full items-center border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container mx-auto flex w-full items-center justify-between">
        <div className="flex items-center justify-center">
          <Link href="/" className="h-10 w-full text-slate-700 dark:text-white">
            {/* <img src={logo} alt="Vidly logo" className="w-full h-full" /> */}
            LOGO
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <SearchInput />
          <ModeToggle />
          {user && <UserAvatar />}
        </div>
      </div>
    </header>
  );
};

export default Header;
