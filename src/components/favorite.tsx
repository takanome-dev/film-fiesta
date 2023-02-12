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
  const { mutate, error, data, isLoading } =
    api.favorite.addFavorite.useMutation();

  if (error) {
    console.error(error);
    toast.error(error.message);
  }

  if (data) {
    toast.success(data.message);
  }

  const handleAddFavorite = () => {
    setIsFavorite(!isFavorite);
    mutate({
      movie,
    });
    onRefetch();
  };

  return (
    <Button
      variant="subtle"
      className={cn(
        'absolute top-6 right-6 hidden rounded-full',
        'h-11 p-2 disabled:cursor-none disabled:opacity-50',
        isFavorite
          ? 'bg-red-200 hover:bg-red-300 dark:bg-red-200 dark:hover:bg-red-300'
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
