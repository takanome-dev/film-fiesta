import { useSession } from 'next-auth/react';
import React from 'react';
import { FaRegComment, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SidebarLink from '@/components/SidebarLink';
import links from '@/lib/utils/links';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <>
      <Header />
      <main className="flex h-full gap-8 bg-slate-50 pr-8">
        <nav className="sticky left-0 top-[3.5rem] h-[calc(100vh-4rem)]">
          <div className="h-full w-44 overflow-x-hidden border-r bg-white">
            <div className="flex h-[87%] flex-col justify-between py-4">
              <ul className="">
                {links.map((l) => (
                  <li key={l.path} className="my-2">
                    <SidebarLink name={l.name} path={l.path} Icon={l.Icon} />
                  </li>
                ))}
              </ul>
              <div className="">
                {/* TODO: use reusable button */}
                <button className="flex w-full cursor-pointer items-center rounded px-6 py-3 transition hover:bg-slate-100">
                  <FaRegComment className="text-slate-500" size={20} />
                  <p className="ml-2 text-slate-600">Feedback</p>
                </button>
                {user?.id ? (
                  <SidebarLink
                    name="Sign out"
                    path="/logout"
                    Icon={FaSignOutAlt}
                    color="!text-red-500"
                  />
                ) : (
                  <SidebarLink
                    name="Sign in"
                    path="/signin"
                    Icon={FaSignInAlt}
                  />
                )}
              </div>
            </div>
            <Footer />
          </div>
        </nav>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
