import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';
import { BsArrowRight, BsGear } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
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
      <Link
        href="/login"
        className={buttonVariants({
          className:
            'h-full bg-slate-600 py-2 font-semibold hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900',
        })}
      >
        Sign in <BsArrowRight className="ml-2" />
      </Link>
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
          <FiUser size={20} className="text-slate-600 dark:text-slate-100" />
          <Link
            href={`/user/${user?.name}`}
            className="ml-2 font-medium text-slate-800 dark:text-slate-100"
          >
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BsGear size={20} className="text-slate-600 dark:text-slate-100" />
          <Link
            href="/settings"
            className="ml-2 font-medium text-slate-800 dark:text-slate-100"
          >
            Settings
          </Link>
        </DropdownMenuItem>
        {user?.isAdmin && (
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
        )}
        {/* <DropdownMenuItem>
          <FaSignOutAlt className="text-red-500 dark:text-red-500" size={20} />
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 dark:text-red-500"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => signOut().catch(console.error)}
          >
            Sign out
          </Button>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
