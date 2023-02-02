import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  BsChevronExpand,
  BsFillCalendarDateFill,
  BsStars,
} from 'react-icons/bs';
import { FaPlayCircle, FaStar, FaYoutube } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import { Slide } from 'react-slideshow-image';

import Card from '@/components/card';
import CommentCard from '@/components/comment-card';
import Error from '@/components/error';
import SkeletonWrapper from '@/components/skeleton-wrapper';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const {
    data: movie,
    error,
    isLoading,
    refetch,
  } = api.movies.getMovieById.useQuery({ id: id ? Number(id) : 0 });

  const {
    data: similarMovie,
    error: similarMovieError,
    isLoading: similarMovieLoading,
    refetch: refetchSimilarMovie,
  } = api.movies.getSimilarMovies.useQuery({ id: id ? Number(id) : 0 });

  const {
    data: reviews,
    error: reviewsError,
    isLoading: reviewsLoading,
    refetch: refetchReviews,
  } = api.movies.getReviews.useQuery({ id: id ? Number(id) : 0 });

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

      {reviews && (
        <div className="my-8">
          {reviewsError && toast.error(reviewsError.message) && (
            <Error
              resourceName="reviews"
              handleRefetch={() => refetchReviews()}
            />
          )}
          <div className="flex">
            {reviewsLoading && (
              <SkeletonWrapper height={200} count={1} radius={6} />
            )}
          </div>
          <Tabs defaultValue="reviews" className="">
            <TabsList>
              <TabsTrigger value="reviews" className="flex items-center gap-2">
                Reviews
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-600">
                  {reviews?.total_results}
                </span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="reviews">
              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="space-y-2"
              >
                <div className="mb-8 flex items-center justify-between">
                  <h4 className="font-semibold uppercase">
                    Toggle all reviews
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <BsChevronExpand className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CommentCard
                  avatarUrl={imageUrl(
                    reviews?.results?.[0]?.author_details.avatar_path as string
                  )}
                  title={reviews?.results?.[0]?.author as string}
                  subTitle={
                    reviews?.results?.[0]?.author_details?.username as string
                  }
                  createdAt={reviews?.results?.[0]?.created_at as string}
                  content={reviews?.results?.[0]?.content as string}
                  className="mb-6 p-6"
                />
                <CollapsibleContent className="space-y-6">
                  {reviews?.results
                    .slice(1, reviews?.total_results)
                    .map((review) => (
                      <CommentCard
                        key={review.id}
                        avatarUrl={imageUrl(review.author_details.avatar_path)}
                        title={review.author}
                        subTitle={review.author_details?.username}
                        createdAt={review.created_at}
                        content={review.content}
                        className="p-6"
                      />
                    ))}
                </CollapsibleContent>
              </Collapsible>
            </TabsContent>
          </Tabs>
        </div>
      )}

      <div className="mt-10">
        <h3 className="mb-4 text-xl text-slate-500 dark:text-slate-400">
          Similar Movies
        </h3>
        {similarMovieError && toast.error(similarMovieError.message) && (
          <Error
            resourceName="similar movies"
            handleRefetch={() => refetchSimilarMovie()}
          />
        )}
        <div className="mt-4 grid grid-cols-6 gap-4">
          {similarMovieLoading && (
            <SkeletonWrapper height={100} count={6} radius={6} />
          )}
        </div>
        {similarMovie && (
          <Slide
            slidesToScroll={5}
            slidesToShow={5}
            indicators
            cssClass="similar-movies-slide"
          >
            {similarMovie?.results.map((m) => (
              <Card movie={m} key={m.id} />
            ))}
          </Slide>
        )}
      </div>
      {/* <MovieTrailer
      videos={movie?.videos}
      openTrailer={openTrailer}
      handleClose={() => setOpenTrailer(false)}
    /> */}
    </>
  );
};

MovieDetailsPage.PageLayout = MainLayout;
export default MovieDetailsPage;
