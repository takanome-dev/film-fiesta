import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-hot-toast';
import { BsFillCalendarDateFill, BsStars } from 'react-icons/bs';
import { FaPlayCircle, FaStar, FaYoutube } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';

import Error from '@/components/error';
import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { api } from '@/lib/utils/api';
import { imageUrl } from '@/lib/utils/movie';

import type { WithPageLayout } from '@/types/with-page-layout';

function SkeletonLoader() {
  return (
    <>
      <Skeleton height={500} borderRadius={6} count={1} />
      <div className="w-full">
        <Skeleton height={40} className="mb-4" />
        <Skeleton height={25} />
        <Skeleton height={25} className="mb-4 mt-2" />
        <Skeleton />
        <Skeleton />
        <div className="mt-4">
          {Array(10)
            .fill(true)
            .map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Skeleton key={index} className="mb-2" />
            ))}
        </div>
      </div>
    </>
  );
}

const MovieDetailsPage: WithPageLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: movie,
    error,
    isLoading,
    refetch,
  } = api.movies.getMovieById.useQuery({ id: id ? Number(id) : 0 });

  if (error) {
    toast.error(error.message);
    return (
      <Error resourceName="movie details" handleRefetch={() => refetch()} />
    );
  }

  return (
    <>
      <div className="grid grid-cols-[350px,1fr] gap-8">
        {isLoading && <SkeletonLoader />}
        {movie && (
          <>
            <div className="h-[500px] w-fit overflow-hidden rounded-lg">
              <Image
                src={imageUrl(movie?.poster_path)}
                alt={movie?.title}
                width={300}
                height={300}
                className="h-full w-full object-fill"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8WQ8AAncBeri2L5wAAAAASUVORK5CYII="
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">{movie?.title}</h1>
              <div className="mt-2 flex gap-4">
                {movie?.genres?.map((g) => (
                  <span
                    key={g.id}
                    className="rounded-lg border border-slate-200 px-4 py-1 dark:border-slate-700"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-8">
                <div className="flex items-center gap-2">
                  <BsFillCalendarDateFill size={16} />
                  <p className="">{movie?.release_date}</p>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-2">
                  <FaStar size={16} className="text-yellow-500" />
                  <p>{movie?.vote_average.toFixed(1)}</p>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-2">
                  <BsStars size={16} className="text-yellow-600" />
                  <p>{movie?.popularity} Votes</p>
                </div>
              </div>
              <div className="mt-6 w-[540px]">
                <p className="text-lg text-slate-500 dark:text-slate-500">
                  Overview
                </p>
                <p className="mt-2">{movie?.overview}</p>
                <div className="mt-8 flex gap-4">
                  <Button>
                    <FaPlayCircle className="mr-2" />
                    Watch now
                  </Button>
                  <Button>
                    <FaYoutube className="mr-2" />
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* {movie?.similar && (
      <div className="similar" data-slider>
        <p>Similar Movies</p>
        <Slider data={movie.similar} />
      </div>
    )}
    <MovieTrailer
      videos={movie?.videos}
      openTrailer={openTrailer}
      handleClose={() => setOpenTrailer(false)}
    /> */}
    </>
  );
};

MovieDetailsPage.PageLayout = MainLayout;
export default MovieDetailsPage;
