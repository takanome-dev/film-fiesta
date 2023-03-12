import Image from 'next/image';
import Link from 'next/link';
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
import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet';
import { siteConfig } from '@/lib/config/site';
import links from '@/lib/utils/links';

import type { Session } from 'next-auth';

interface SignOutProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface MobileNavProps {
  openNav: boolean;
  setOpenNav: (open: boolean) => void;
  openFeedback: boolean;
  setOpenFeedback: (open: boolean) => void;
  openSignOut: boolean;
  setOpenSignOut: (open: boolean) => void;
  user?: Session['user'];
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
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const MobileSidebar: React.FC<MobileNavProps> = (props) => (
  <Sheet open={props.openNav} onOpenChange={props.setOpenNav}>
    <SheetContent position="left" size="lg">
      <SheetHeader>
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
      </SheetHeader>
      <div className="flex h-full flex-col justify-between px-2 py-8">
        <div>
          <p className="mb-4 ml-4 text-sm font-semibold text-slate-400 dark:text-slate-500">
            Menu
          </p>
          <ul className="grid grid-flow-row auto-rows-max text-sm">
            {links.map((l) => (
              <li key={l.path} className="my-1">
                <SidebarLink
                  name={l.name}
                  path={l.path}
                  Icon={l.Icon}
                  className="block"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-20">
          <p className="mb-4 ml-1 text-sm font-semibold text-slate-400 dark:text-slate-500 lg:ml-4">
            Library
          </p>
          <ul className="grid grid-flow-row auto-rows-max text-sm">
            {props.user?.id && (
              <li className="my-1">
                <SidebarLink
                  name="Favorites"
                  path="/favorites"
                  Icon={FaRegHeart}
                  className="block"
                />
              </li>
            )}
            <li className="my-1">
              <SidebarLink
                name="Search"
                path="/search"
                Icon={FaSearch}
                className="block"
              />
            </li>
            <li className="my-1">
              <SidebarLink
                name="History"
                path="/history"
                Icon={AiOutlineHistory}
                className="block"
              />
            </li>
            <Separator className="my-4" />
            <li className="my-1">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-slate-200"
                onClick={() => props.setOpenFeedback(!props.openFeedback)}
              >
                <FaRegComment className="h-5 w-5 text-slate-500 dark:text-slate-100 lg:h-6 lg:w-6" />
                <p className="ml-4 text-slate-800 dark:text-slate-100">
                  Feedback
                </p>
              </Button>
            </li>
            <li className="my-1">
              <SidebarLink
                name="Report a bug"
                path={siteConfig.links.bugReport}
                Icon={MdBugReport}
                className="block"
              />
            </li>
          </ul>
        </div>
        <div className="">
          {props.user?.id ? (
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:bg-slate-200 dark:text-red-500 dark:hover:text-red-500"
              onClick={() => props.setOpenSignOut(!props.openSignOut)}
            >
              <FaSignOutAlt className="h-5 w-5 lg:h-6 lg:w-6" />
              <p className="ml-2">Sign out</p>
            </Button>
          ) : (
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-slate-200"
              onClick={() => props.setOpenFeedback(!props.openFeedback)}
            >
              <FaSignInAlt className="h-5 w-5 text-slate-500 dark:text-slate-100 lg:h-6 lg:w-6" />
              <p className="ml-2 text-slate-800 dark:text-slate-100">Sign in</p>
            </Button>
          )}
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

const Sidebar: React.FC<Pick<MobileNavProps, 'openNav' | 'setOpenNav'>> = (
  props
) => {
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
                <FaRegComment className="h-5 w-5 text-slate-500 dark:text-slate-100 lg:h-6 lg:w-6" />
                <p className="ml-4 hidden text-slate-800 dark:text-slate-100 lg:block">
                  Feedback
                </p>
              </Button>
            </li>
            <li className="my-1">
              <SidebarLink
                name="Report a bug"
                path={siteConfig.links.bugReport}
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
              <FaSignOutAlt className="h-5 w-5 lg:h-6 lg:w-6" />
              <p className="ml-2 hidden lg:block">Sign out</p>
            </Button>
          ) : (
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-slate-200"
              onClick={() => setOpenFeedback(!openFeedback)}
            >
              <FaSignInAlt className="h-5 w-5 text-slate-500 dark:text-slate-100 lg:h-6 lg:w-6" />
              <p className="ml-2 hidden text-slate-800 dark:text-slate-100 lg:block">
                Sign in
              </p>
            </Button>
          )}
        </div>
      </div>
      <Feedback open={openFeedback} setOpen={setOpenFeedback} />
      <SignOutModal open={openSignOut} setOpen={setOpenSignOut} />
      <MobileSidebar
        openNav={props.openNav}
        setOpenNav={props.setOpenNav}
        openFeedback={openFeedback}
        setOpenFeedback={setOpenFeedback}
        openSignOut={openSignOut}
        setOpenSignOut={setOpenSignOut}
        user={user}
      />
    </>
  );
};

export default Sidebar;
