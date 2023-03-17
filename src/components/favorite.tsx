import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineInfoCircle,
} from 'react-icons/ai';

import { Button } from '@/components/ui/button';
import { api } from '@/lib/utils/api';
import { cn } from '@/lib/utils/classname';

import type { MovieSchema } from '@/schemas/movies';

interface Props {
  className?: string;
  movie?: MovieSchema;
  onRefetch?: () => void;
}

const Favorite: React.FC<Props> = ({ className = '', movie, onRefetch }) => {
  const { data: session } = useSession();
  const user = session?.user;

  const [isFavorite, setIsFavorite] = useState(movie?.is_favorite ?? false);
  const { mutate, isLoading } = api.favorite.addFavorite.useMutation();

  if (!movie) return null;

  const handleAddFavorite = () => {
    if (!user) {
      toast(
        'You need to sign in before you can add a movie to your favorites.',
        {
          icon: (
            <AiOutlineInfoCircle className="mr-2 text-amber-500" size={40} />
          ),
          position: 'top-center',
          className:
            'border-l-4 border-amber-400 dark:bg-slate-800 dark:text-slate-100',
        }
      );
      return;
    }

    setIsFavorite(!isFavorite);
    mutate(
      { movie },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          onRefetch?.();
        },
        onError: (error) => {
          console.error(error);
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <Button
      variant="subtle"
      className={cn(
        'absolute top-6 right-6 hidden rounded-full',
        'h-11 p-2 focus:ring-0 disabled:cursor-none disabled:opacity-50',
        isFavorite
          ? 'bg-red-100 hover:bg-red-200 dark:bg-red-100 dark:hover:bg-red-200'
          : '',
        className
      )}
      onClick={handleAddFavorite}
      disabled={isLoading}
    >
      {isFavorite ? (
        <AiFillHeart className="text-red-600 dark:text-red-600" size={24} />
      ) : (
        <AiOutlineHeart
          className="text-slate-700 dark:text-slate-100"
          size={24}
        />
      )}
    </Button>
  );
};

export default Favorite;
