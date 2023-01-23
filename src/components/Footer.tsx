import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiDiscord, SiTwitter } from 'react-icons/si';

const Footer = () => (
  <footer className="mt-8 flex flex-col items-center">
    <div className="flex gap-4">
      <FaGithub size={20} className="cursor-pointer" tabIndex={0} />
      <SiDiscord
        size={20}
        className="cursor-pointer text-[#5865F2]"
        tabIndex={0}
      />
      <SiTwitter
        size={20}
        className="cursor-pointer text-[#1DA1F2]"
        tabIndex={0}
      />
    </div>
    <p className="mt-2 text-center font-medium text-slate-600">
      &copy; takanome_dev
    </p>
  </footer>
);

export default Footer;
