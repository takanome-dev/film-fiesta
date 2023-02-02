import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils/classname';

interface CommentCardProps {
  avatarUrl: string;
  title: string;
  subTitle: string;
  createdAt: string;
  content: string;
  className?: string;
}

const CommentCard: React.FC<CommentCardProps> = (props) => {
  const { avatarUrl, title, subTitle, createdAt, content, className } = props;

  return (
    <div
      className={cn(
        'w-full rounded-lg border border-slate-200 p-4 dark:border-slate-700',
        className || ''
      )}
    >
      <div className="flex justify-between">
        <div className="flex">
          <Avatar>
            <AvatarImage src={avatarUrl} alt={title} />
            <AvatarFallback>N/A</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {subTitle}
            </p>
          </div>
        </div>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          {new Intl.DateTimeFormat('en-US').format(
            new Date(createdAt ?? Date.now())
          )}
        </p>
      </div>
      <div className="my-6">
        <p className="font-mono">{content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
