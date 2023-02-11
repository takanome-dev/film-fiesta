import React from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { Button } from '@/components/ui/button';
import { api } from '@/lib/utils/api';
import { cn } from '@/lib/utils/classname';

import type { MovieSchema } from '@/schemas/movies';

interface Props {
  className?: string;
  movie: MovieSchema;
}

const Favorite: React.FC<Props> = ({ className = '', movie }) => {
  // TODO: handle optimistic update
  const { mutate, error } = api.favorite.addFavorite.useMutation();

  if (error) {
    console.error(error);
    toast.error(error.message);
  }

  const handleAddFavorite = () => {
    mutate({
      movie,
    });
  };

  return (
    <Button
      variant="subtle"
      className={cn(
        'absolute top-6 right-6 hidden rounded-full',
        'h-11 p-2',
        movie.is_favorite
          ? 'bg-red-200 hover:bg-red-300 dark:bg-red-200 dark:hover:bg-red-300'
          : '',
        className
      )}
      onClick={handleAddFavorite}
    >
      {movie.is_favorite ? (
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
