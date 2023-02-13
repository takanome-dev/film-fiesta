import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

import { cn } from '@/lib/utils/classname';

interface Props {
  className?: string;
}

const Favorite: React.FC<Props> = ({ className = '' }) => (
  <div
    className={cn(
      'absolute top-6 right-6 hidden cursor-pointer rounded-full p-2',
      'bg-slate-200 transition-opacity dark:bg-slate-600',
      className
    )}
  >
    <AiOutlineHeart className="text-slate-700 dark:text-slate-100" size={24} />
  </div>
);

export default Favorite;
