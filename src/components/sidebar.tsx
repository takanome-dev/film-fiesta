import { useSession } from 'next-auth/react';
import React from 'react';
import { FaRegComment, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

import Footer from '@/components/footer';
import SidebarLink from '@/components/sidebar-link';
import links from '@/lib/utils/links';

import { Button } from './ui/button';

const Sidebar = () => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <nav className="sticky left-0 top-[3.5rem] h-[calc(100vh-4rem)] border-r border-r-slate-100 bg-white dark:border-r-slate-700 dark:bg-slate-900">
      <div className="h-full w-44 overflow-x-hidden">
        <div className="flex h-[87%] flex-col justify-between py-4 px-2">
          <ul className="">
            {links.map((l) => (
              <li key={l.path} className="my-1">
                <SidebarLink name={l.name} path={l.path} Icon={l.Icon} />
              </li>
            ))}
          </ul>
          <div className="">
            <Button variant="ghost" className="w-full justify-start">
              <FaRegComment
                className="text-slate-500 dark:text-slate-100"
                size={20}
              />
              <p className="ml-2 text-slate-800 dark:text-slate-100">
                Feedback
              </p>
            </Button>
            {user?.id ? (
              <SidebarLink
                name="Sign out"
                path="/logout"
                Icon={FaSignOutAlt}
                className="text-red-500 dark:text-red-500"
              />
            ) : (
              <SidebarLink name="Sign in" path="/signin" Icon={FaSignInAlt} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </nav>
  );
};

export default Sidebar;
