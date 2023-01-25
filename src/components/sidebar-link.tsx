'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils/classname';

import type { IconType } from 'react-icons';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  path: string;
  name: string;
  color?: string;
  Icon: IconType;
}

const SidebarLink: React.FC<Props> = (props) => {
  const { path, name, Icon, color } = props;

  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link
      className={cn(
        'flex cursor-pointer items-center rounded px-6 py-3',
        'transition hover:bg-slate-100 dark:hover:bg-slate-800',
        isActive && 'bg-slate-300 dark:bg-slate-800'
      )}
      href={path}
    >
      <Icon
        className={cn(
          'text-slate-500',
          color || '',
          isActive && 'bg-slate-300 dark:bg-slate-800'
        )}
        size={20}
      />
      <p
        className={cn(
          'ml-4 text-slate-700 dark:text-slate-900',
          color && color
        )}
      >
        {name}
      </p>
    </Link>
  );
};
export default SidebarLink;
