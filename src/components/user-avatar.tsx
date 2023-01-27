import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React from 'react';
import { FiUser } from 'react-icons/fi';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const UserAvatar = () => {
  const user = useSession().data?.user;
  // TODO: add a fallback image

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent focus:ring-0 dark:hover:bg-transparent dark:focus:ring-0"
        >
          <Image
            src={user?.image as string}
            alt={user?.name as string}
            className="rounded-full object-cover"
            width={35}
            height={35}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <FiUser size={20} className="text-slate-600 dark:text-slate-100" />
          <span className="ml-2 font-medium text-slate-800 dark:text-slate-100">
            Profile
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FiUser size={20} className="text-slate-600 dark:text-slate-100" />
          <span className="ml-2 font-medium text-slate-800 dark:text-slate-100">
            Profile
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FiUser size={20} className="text-slate-600 dark:text-slate-100" />
          <span className="ml-2 font-medium text-slate-800 dark:text-slate-100">
            Profile
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
