import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { Button } from '@/components/ui/button';
import { api } from '@/lib/utils/api';
import { cn } from '@/lib/utils/classname';

import type { MovieSchema } from '@/schemas/movies';

interface Props {
  className?: string;
  movie: MovieSchema;
  onRefetch: () => any;
}

const Favorite: React.FC<Props> = ({ className = '', movie, onRefetch }) => {
  const [isFavorite, setIsFavorite] = useState(movie.is_favorite);
  const { mutate, isLoading } = api.favorite.addFavorite.useMutation();

  const handleAddFavorite = () => {
    setIsFavorite(!isFavorite);
    mutate(
      { movie },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          onRefetch();
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
        'h-11 p-2 disabled:cursor-none disabled:opacity-50',
        isFavorite
          ? 'bg-red-100 hover:bg-red-200 dark:bg-red-100 dark:hover:bg-red-200'
          : '',
        className
      )}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
