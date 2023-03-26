import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";

import { buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/lib/config/site";

const Footer = () => (
  <footer className="border-t border-t-slate-200 dark:border-t-slate-700">
    <div className="xs:px-0 container mx-auto flex w-full items-center justify-between px-12 py-6">
      <p className="mt-1 text-center text-slate-800 dark:text-slate-100">
        🛠 Built by{" "}
        <Link
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          takanome-dev
        </Link>
      </p>
      <div className="flex gap-2">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <FaGithub size={18} className="cursor-pointer" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
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
