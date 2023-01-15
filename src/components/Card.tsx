/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { FaStar } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import urls from '../utils/movieUrls';
import { CardInt } from './types';

const Card: React.FC<CardInt> = ({ movie, width = '300', height = '300' }) => {
  const url = movie.poster_path ?? movie.backdrop_path;
  const location = useLocation();

  return (
    <div className="rounded-lg overflow-hidden relative transition bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg hover:shadow-md border border-slate-300 p-4">
      <div className="w-full h-80 rounded-lg overflow-hidden">
        <img
          src={urls.imageUrl(url!)}
          alt={movie.title}
          width={width}
          height={height}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="pt-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex">
            <FaStar className="text-yellow-400" size={20} />{' '}
            <p className="ml-2 text-slate-600 font-semibold">
              {movie.vote_average}
            </p>
          </div>
          <p className="text-slate-400">{movie.release_date}</p>
        </div>
        <Link
          to={`/movies/${movie.id}`}
          className="text-xl font-semibold text-slate-600 hover:underline"
        >
          {movie.title}
        </Link>
      </div>
    </div>
  );
};

export default Card;
