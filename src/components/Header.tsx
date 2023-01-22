// import { useEffect, useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

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
        <div>
          {/* <SearchInput /> */}
          SEARCHINPUT
          {user && <div className="avatar">Avatar</div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
