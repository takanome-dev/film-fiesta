/* eslint-disable */
// eslint disabled because CI keeps failing for some reason

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";

import Favorite from "~/components/favorite";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import notFoundImage from "~/assets/image-not-found.png";
import type { LocalStorageKeys } from "~/lib/hooks/useLocalStorage";
import { imageUrl } from "~/lib/utils/movie";
import type { MovieSchema } from "~/schemas/movies";

interface Props {
  movie: MovieSchema;
  handleRefetch?: () => void;
  isHistory?: boolean;
  handleRemoveFromHistory?: (key: LocalStorageKeys, value: MovieSchema) => void;
}

const RemoveFromHistory = ({ onRemove }: { onRemove: () => void }) => (
  <Button
    variant="subtle"
    className="absolute top-6 right-6 h-11 rounded-full bg-red-100 p-2 hover:bg-red-200 focus:ring-0 disabled:cursor-none disabled:opacity-50 dark:bg-red-100 dark:hover:bg-red-200"
    onClick={onRemove}
  >
    <HiTrash
      className="text-red-500 hover:text-red-700 dark:text-red-500 hover:dark:text-red-700"
      size={24}
    />
  </Button>
);

const Card: React.FC<Props> = ({
  movie,
  handleRefetch,
  isHistory,
  handleRemoveFromHistory,
}) => {
  const url = movie.poster_path ?? movie.backdrop_path;
  const image = url ? imageUrl(url) : notFoundImage;

  return (
    <div className="group relative rounded-lg border border-slate-200 bg-white/50 p-4 shadow-slate-200 backdrop-blur-md hover:bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="h-80 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={movie.title}
          width={300}
          height={300}
          className="h-full w-full object-center transition group-hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8WQ8AAncBeri2L5wAAAAASUVORK5CYII="
        />
      </div>
      <div className="w-full overflow-hidden truncate pt-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex">
            <FaStar className="text-yellow-400" size={16} />
            <p className="ml-2 font-semibold text-slate-800 dark:text-slate-200">
              {movie.vote_average.toFixed(1)}
            </p>
          </div>
          <p className="text-slate-400 dark:text-slate-500">
            {movie.release_date}
          </p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={`/movies/${movie.id}`}
                className="text-xl font-semibold text-slate-800 hover:underline dark:text-slate-100"
              >
                {movie.title}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{movie.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {isHistory ? (
        <RemoveFromHistory
          onRemove={() => handleRemoveFromHistory?.("filmfiesta_movies", movie)}
        />
      ) : (
        <Favorite
          movie={movie}
          onRefetch={handleRefetch}
          className="group-hover:block"
        />
      )}
    </div>
  );
};

export default Card;
