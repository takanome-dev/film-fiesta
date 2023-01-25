'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils/classname';

import { buttonVariants } from './ui/button';

import type { IconType } from 'react-icons';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  path: string;
  name: string;
  Icon: IconType;
}

const SidebarLink: React.FC<Props> = (props) => {
  const { path, name, Icon, className } = props;

  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link
      className={buttonVariants({
        variant: 'ghost',
        className: cn(
          'w-full !justify-start',
          isActive && 'bg-slate-200 dark:bg-slate-700'
        ),
      })}
      href={path}
    >
      <Icon
        className={cn(
          'text-slate-500 dark:text-slate-100',
          className || '',
          isActive && 'bg-slate-300 dark:bg-slate-800'
        )}
        size={20}
      />
      <p
        className={cn(
          'ml-4 text-slate-800 dark:text-slate-100',
          className || ''
        )}
      >
        {name}
      </p>
    </Link>
  );
};
export default SidebarLink;
