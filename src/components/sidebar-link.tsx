import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/classname';

import type { IconType } from 'react-icons';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  path: string;
  name: string;
  Icon: IconType;
  external?: boolean;
}

const SidebarLink: React.FC<Props> = (props) => {
  const { path, name, Icon, className, external } = props;

  const pathname = usePathname();

  return (
    <Link
      className={buttonVariants({
        variant: 'ghost',
        className: cn('w-full !justify-start hover:bg-slate-100 focus:ring-0', {
          '!bg-slate-200 dark:!bg-slate-700': pathname === path,
        }),
      })}
      href={path}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <Icon
        className={cn('text-slate-500 dark:text-slate-200', className || '')}
        size={20}
      />
      <p
        className={cn(
          'ml-4 text-slate-800 dark:text-slate-100',
          'hidden lg:block',
          className || ''
        )}
      >
        {name}
      </p>
    </Link>
  );
};
export default SidebarLink;
