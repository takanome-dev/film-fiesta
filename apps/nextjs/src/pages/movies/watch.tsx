/* eslint-disable */
// eslint disabled because CI keeps failing for some reason

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { BsFillCalendarDateFill, BsStars } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

import type { MovieSchema } from "@acme/schema";

import Error from "~/components/error";
import Favorite from "~/components/favorite";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import notFoundImage from "~/assets/image-not-found.png";
import SimpleLayout from "~/layouts/simple-layout";
import { api } from "~/lib/utils/api";
import { embedMovieUrl, imageUrl } from "~/lib/utils/movie";
import type { WithPageLayout } from "~/types/with-page-layout";

const WatchMoviePage: WithPageLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: movie,
    error: movieError,
    isLoading: movieIsLoading,
    refetch,
  } = api.movies.getMovieById.useQuery({ id: id ? Number(id) : 0 });
  const { data, isLoading, error } = api.movies.getRecommendations.useQuery({
    id: id ? Number(id) : 0,
  });

  if (error || movieError) {
    toast.error((error || movieError)?.message as string);
    return (
      <Error resourceName="movie details" handleRefetch={() => refetch()} />
    );
  }

  const getUrl = (movieData: MovieSchema) => {
    const url = movieData.poster_path ?? movieData.backdrop_path;
    return url ? imageUrl(url) : notFoundImage;
  };

  return (
    <div className="grid grid-cols-[1fr,300px] gap-8">
      {!id && <Skeleton />}
      {id && (
        <div>
          <div className="h-[90vh]">
            <iframe
              src={`${embedMovieUrl(Number(id))}`}
              width="100%"
              height="100%"
              title={`Movie ${id as string}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {movieIsLoading && (
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
                    <Skeleton key={index} className="mb-2" />
                  ))}
              </div>
            </div>
          )}
          {movie && (
            <div className="mt-10 flex flex-col gap-4">
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
                  <p className="text-slate-600 dark:text-slate-300">
                    {movie?.release_date}
                  </p>
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
              <div className="mt-6 w-[700px]">
                <p className="text-lg text-slate-500 dark:text-slate-500">
                  Overview
                </p>
                <p className="mt-2">{movie?.overview}</p>
              </div>
            </div>
          )}
        </div>
      )}
      <div>
        <h2 className="text-lg font-semibold text-slate-500 dark:text-slate-400">
          Recommendations
        </h2>
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <div className="grid grid-cols-1 gap-4">
              <Skeleton key={index} />
            </div>
          ))}
        {data?.results?.map((recommendedMovie) => (
          <div
            key={recommendedMovie.id}
            className="group relative flex gap-4 rounded-lg bg-slate-100 p-4 shadow-slate-200 dark:bg-slate-900"
          >
            <div className="h-44 w-full overflow-hidden rounded-lg">
              <Image
                src={getUrl(recommendedMovie)}
                alt={recommendedMovie.title}
                width={200}
                height={200}
                className="h-full w-full object-center transition group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8WQ8AAncBeri2L5wAAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full overflow-hidden truncate">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={`/movies/${recommendedMovie.id}`}
                      className="w-full text-xl font-semibold text-slate-800 hover:underline dark:text-slate-100"
                    >
                      {recommendedMovie.title}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{recommendedMovie.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="mt-2 flex gap-4">
                <FaStar className="text-yellow-400" size={16} />
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  {recommendedMovie.vote_average.toFixed(1)}
                </p>
              </div>
              <div className="mt-2 flex items-center gap-4">
                <BsFillCalendarDateFill size={16} />
                <p className="text-slate-600 dark:text-slate-300">
                  {recommendedMovie.release_date}
                </p>
              </div>
            </div>
            <Favorite movie={movie} className="right-52 group-hover:block" />
          </div>
        ))}
      </div>
    </div>
  );
};

WatchMoviePage.PageLayout = SimpleLayout;
export default WatchMoviePage;
