import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiDiscord, SiTwitter } from 'react-icons/si';

const Footer = () => (
  <footer className="mt-8 flex flex-col items-center border-t border-t-slate-200 dark:border-t-slate-700">
    <div className="flex gap-4 pt-4">
      <FaGithub size={16} className="cursor-pointer" tabIndex={0} />
      <SiDiscord
        size={16}
        className="cursor-pointer text-[#5865F2]"
        tabIndex={0}
      />
      <SiTwitter
        size={16}
        className="cursor-pointer text-[#1DA1F2]"
        tabIndex={0}
      />
    </div>
    <p className="mt-1 text-center text-slate-800 dark:text-slate-100">
      &copy; <span className="underline">takanome_dev</span>
    </p>
  </footer>
);

export default Footer;
