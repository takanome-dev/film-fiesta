import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';
import { FaRegComment } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
        <Avatar className="cursor-pointer">
          <AvatarImage src={user?.image as string} alt={user?.name as string} />
          <AvatarFallback>TK</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36">
        <DropdownMenuItem>
          <FaRegComment
            size={16}
            className="text-slate-600 dark:text-slate-100"
          />
          <Link
            href="/feedbacks"
            className="ml-2 font-medium text-slate-800 dark:text-slate-100"
          >
            Feedbacks
          </Link>
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
