import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import type { IconType } from 'react-icons';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  path: string;
  name: string;
  // color: string;
  Icon: IconType;
}

const SidebarLink: React.FC<Props> = (props) => {
  const { path, name, Icon } = props;

  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <Link
      className={clsx(
        'flex cursor-pointer items-center rounded px-6 py-3',
        'transition hover:bg-slate-100',
        isActive && 'bg-blue-500'
      )}
      href={path}
    >
      <Icon
        className={clsx('text-slate-500', isActive && 'bg-blue-500')}
        size={22}
      />
      <p className="ml-4 text-slate-600">{name}</p>
    </Link>
  );
};
export default SidebarLink;
