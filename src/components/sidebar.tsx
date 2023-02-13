import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { FaRegComment, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

import Feedback from '@/components/feedback';
import Footer from '@/components/footer';
import SidebarLink from '@/components/sidebar-link';
import { Button } from '@/components/ui/button';
import links from '@/lib/utils/links';

const Sidebar = () => {
  const [openFeedback, setOpenFeedback] = useState(false);
  const { data } = useSession();
  const user = data?.user;

  return (
    <>
      <div className="flex h-[calc(100vh-10rem)] flex-col justify-between py-4 px-2">
        <ul className="grid grid-flow-row auto-rows-max text-sm">
          {links.map((l) => (
            <li key={l.path} className="my-1">
              <SidebarLink name={l.name} path={l.path} Icon={l.Icon} />
            </li>
          ))}
        </ul>
        <div className="">
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-slate-200"
            onClick={() => setOpenFeedback(!openFeedback)}
          >
            <FaRegComment
              className="text-slate-500 dark:text-slate-100"
              size={20}
            />
            <p className="ml-2 text-slate-800 dark:text-slate-100">Feedback</p>
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
      <Feedback open={openFeedback} setOpen={setOpenFeedback} />
      <Footer />
    </>
  );
};

export default Sidebar;
