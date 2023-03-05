import { useSession, signOut } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineHistory } from 'react-icons/ai';
import {
  FaRegComment,
  FaSignInAlt,
  FaSignOutAlt,
  FaRegHeart,
  FaSearch,
} from 'react-icons/fa';
import { MdBugReport } from 'react-icons/md';

import Feedback from '@/components/feedback';
import SidebarLink from '@/components/sidebar-link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import links from '@/lib/utils/links';

interface SignOutProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SignOutModal: React.FC<SignOutProps> = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const handleSignOut = async () => {
    await signOut();
    setOpen(false);
    toast.success('Signed out successfully!');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} key="sign-out">
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Do you really want to sign out?</DialogTitle>
          <DialogDescription>We will be sad to see you go 😢</DialogDescription>
        </DialogHeader>
        <div className="my-8 flex justify-center gap-8">
          <Button
            onClick={handleClose}
            size="lg"
            className="font-medium focus:ring-0"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            size="lg"
            className="font-semibold"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Sidebar = () => {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);
  const { data } = useSession();
  const user = data?.user;

  return (
    <>
      <div className="flex h-[calc(100vh-4rem)] flex-col justify-between px-2 py-8">
        <div>
          <p className="mb-4 ml-1 text-sm font-semibold text-slate-400 dark:text-slate-500 lg:ml-4">
            Menu
          </p>
          <ul className="grid grid-flow-row auto-rows-max text-sm">
            {links.map((l) => (
              <li key={l.path} className="my-1">
                <SidebarLink name={l.name} path={l.path} Icon={l.Icon} />
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-20">
          <p className="mb-4 ml-1 text-sm font-semibold text-slate-400 dark:text-slate-500 lg:ml-4">
            Library
          </p>
          <ul className="grid grid-flow-row auto-rows-max text-sm">
            {user?.id && (
              <li className="my-1">
                <SidebarLink
                  name="Favorites"
                  path="/favorites"
                  Icon={FaRegHeart}
                />
              </li>
            )}
            <li className="my-1">
              <SidebarLink name="Search" path="/search" Icon={FaSearch} />
            </li>
            <li className="my-1">
              <SidebarLink
                name="History"
                path="/history"
                Icon={AiOutlineHistory}
              />
            </li>
            <Separator className="my-4" />
            <li className="my-1">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-slate-200"
                onClick={() => setOpenFeedback(!openFeedback)}
              >
                <FaRegComment
                  className="text-slate-500 dark:text-slate-100"
                  size={20}
                />
                <p className="ml-4 hidden text-slate-800 dark:text-slate-100 lg:block">
                  Feedback
                </p>
              </Button>
            </li>
            <li className="my-1">
              <SidebarLink
                name="Report a bug"
                // TODO: move to config file - update repo name
                path="https://github.com/TAKANOME-DEV/vidly-client/issues/new?assignees=&labels=%F0%9F%90%9B+bug%2C%F0%9F%91%80+awaiting+triage&template=bug-report.yml&title=Bug%3A+"
                Icon={MdBugReport}
              />
            </li>
          </ul>
        </div>
        <div className="">
          {user?.id ? (
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:bg-slate-200 dark:text-red-500 dark:hover:text-red-500"
              onClick={() => setOpenSignOut(!openSignOut)}
            >
              <FaSignOutAlt className="" size={20} />
              <p className="ml-2 hidden lg:block">Sign out</p>
            </Button>
          ) : (
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-slate-200"
              onClick={() => setOpenFeedback(!openFeedback)}
            >
              <FaSignInAlt
                className="text-slate-500 dark:text-slate-100"
                size={20}
              />
              <p className="ml-2 hidden text-slate-800 dark:text-slate-100 lg:block">
                Sign in
              </p>
            </Button>
          )}
        </div>
      </div>
      <Feedback open={openFeedback} setOpen={setOpenFeedback} />
      <SignOutModal open={openSignOut} setOpen={setOpenSignOut} />
    </>
  );
};

export default Sidebar;
