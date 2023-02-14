import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { UserSchema } from '@/schemas/user';

const UserAvatar = () => {
  const { data: session } = useSession();
  const user = session?.user as UserSchema;

  if (!user) {
    // TODO: add sign in route or modal
    return (
      <Button className="h-full bg-slate-600 py-2 font-semibold hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900">
        Sign in <BsArrowRight className="ml-2" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={user?.image as string} alt={user?.name} />
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
