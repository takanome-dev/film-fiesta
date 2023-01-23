// import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { BiSun } from 'react-icons/bi';

import SearchInput from './SearchInput';
import UserAvatar from './UserAvatar';

const Header = () => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <header className="sticky top-0 z-10 flex h-14 w-full items-center bg-white shadow">
      <div className="flex w-full items-center justify-between px-14">
        <div className="flex items-center justify-center">
          <Link href="/" className="h-10 w-full">
            {/* <img src={logo} alt="Vidly logo" className="w-full h-full" /> */}
            LOGO
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <SearchInput />
          <div className="rounded-full p-1 transition hover:bg-slate-100">
            <BiSun size={25} className="cursor-pointer text-slate-600" />
          </div>
          {user && <UserAvatar />}
        </div>
      </div>
    </header>
  );
};

export default Header;
