import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React from 'react';
import { FiUser } from 'react-icons/fi';

const UserAvatar = () => {
  const user = useSession().data?.user;
  // TODO: add a fallback image

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="overflow-hidden rounded-full border border-green-300">
          <Image
            src={user?.image as string}
            alt={user?.name as string}
            className="rounded-full object-cover"
            width={35}
            height={35}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className={clsx(
            'rdx-side-top:animate-slide-up rdx-side-bottom:animate-slide-down',
            'z-10 w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56',
            'border bg-white'
          )}
          sideOffset={5}
        >
          <DropdownMenu.Item
            className={clsx(
              'flex cursor-default select-none items-center rounded-md',
              'cursor-pointer px-2 py-2 text-xs outline-none',
              'text-gray-400 focus:bg-gray-50'
            )}
          >
            <FiUser size={20} className="text-slate-600" />
            <span className="ml-2 font-medium text-slate-600">Profile</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={clsx(
              'flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-xs outline-none',
              'text-gray-400 focus:bg-gray-50'
            )}
          >
            <FiUser size={20} className="text-slate-600" />
            <span className="ml-2 font-medium text-slate-600">Profile</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default UserAvatar;
