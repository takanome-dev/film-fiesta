import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import type { IconType } from 'react-icons';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  path: string;
  name: string;
  color?: string;
  Icon: IconType;
}

const SidebarLink: React.FC<Props> = (props) => {
  const { path, name, Icon, color } = props;

  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <Link
      className={clsx(
        'flex cursor-pointer items-center rounded px-6 py-3',
        'transition hover:bg-slate-100',
        isActive && 'bg-blue-300'
      )}
      href={path}
    >
      <Icon
        className={clsx(
          'text-slate-500',
          color && color,
          isActive && 'bg-blue-300'
        )}
        size={20}
      />
      <p className={clsx('ml-4 text-slate-600', color && color)}>{name}</p>
    </Link>
  );
};
export default SidebarLink;
