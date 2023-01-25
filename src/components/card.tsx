import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

import { imageUrl } from '@/lib/utils/movie';

import type { Movie } from '@/types/movies';

interface Props {
  movie: Movie;
}

const Card: React.FC<Props> = ({ movie }) => {
  const url = movie.poster_path ?? movie.backdrop_path;

  return (
    <div className="relative rounded-lg border border-slate-200 bg-white/50 p-4 backdrop-blur-xl dark:border-slate-600 dark:bg-slate-900/50">
      <div className="h-80 w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl(url)}
          alt={movie.title}
          width={300}
          height={300}
          className="h-full w-full object-center"
        />
      </div>
      <div className="w-full overflow-hidden truncate pt-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex">
            <FaStar className="text-yellow-400" size={16} />
            <p className="ml-2 font-semibold text-slate-800 dark:text-slate-200">
              {movie.vote_average}
            </p>
          </div>
          <p className="text-slate-400 dark:text-slate-500">
            {movie.release_date}
          </p>
        </div>
        <Link
          href={`/movies/${movie.id}`}
          className="text-xl font-semibold text-slate-800 hover:underline dark:text-slate-100"
        >
          {movie.title}
        </Link>
      </div>
    </div>
  );
};

export default Card;
