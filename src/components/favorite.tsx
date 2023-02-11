import React from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineHeart } from 'react-icons/ai';

import { Button } from '@/components/ui/button';
import { api } from '@/lib/utils/api';
import { cn } from '@/lib/utils/classname';

import type { MovieSchema } from '@/schemas/movies';

interface Props {
  className?: string;
  movie: MovieSchema;
}

const Favorite: React.FC<Props> = ({ className = '', movie }) => {
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
        className
      )}
      onClick={handleAddFavorite}
    >
      <AiOutlineHeart
        className="text-slate-700 dark:text-slate-100"
        size={24}
      />
    </Button>
  );
};

export default Favorite;
