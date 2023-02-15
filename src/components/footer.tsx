import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';

import { buttonVariants } from '@/components/ui/button';

const Footer = () => (
  <footer className="border-t border-t-slate-200 dark:border-t-slate-700">
    <div className="container mx-auto flex w-full items-center justify-between px-12 py-6 xs:px-0">
      <p className="mt-1 text-center text-slate-800 dark:text-slate-100">
        {/* TODO: create a config file to hold the infos */}
        🛠 Built by{' '}
        <Link
          href="https://twitter.com/takanome-dev"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          takanome-dev
        </Link>
      </p>
      <div className="flex gap-2">
        <Link
          href="https://github.com/TAKANOME-DEV"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: 'sm',
              variant: 'ghost',
            })}
          >
            <FaGithub size={18} className="cursor-pointer" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link
          href="https://twitter.com/takanome-dev"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: 'sm',
              variant: 'ghost',
            })}
          >
            <SiTwitter size={18} className="text-[#1DA1F2]" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
