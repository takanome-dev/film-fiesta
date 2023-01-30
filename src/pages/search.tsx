import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BsArrowRepeat } from 'react-icons/bs';
import { MdBugReport } from 'react-icons/md';

import Card from '@/components/card';
import Feedback from '@/components/feedback';
import Pagination from '@/components/pagination';
import SkeletonWrapper from '@/components/skeleton-wrapper';
import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { api } from '@/lib/utils/api';

import type { WithPageLayout } from '@/types/with-page-layout';

const SearchPage: WithPageLayout = () => {
  const [openFeedback, setOpenFeedback] = useState(false);
  const router = useRouter();
  const { q, page } = router.query;

  const pageNumber = page ? Number(page) : 1;

  const {
    data: topRatedMovies,
    error: topRatedMoviesErr,
    isLoading: topRatedMoviesLoading,
    refetch: refetchTopRatedMovies,
  } = api.movies.getTopRated.useQuery({
    page: pageNumber,
  });

  const { data, error, isLoading } = api.search.getMovies.useQuery({
    query: q as string,
    page: pageNumber,
  });

  const handleRefetch = () => refetchTopRatedMovies();

  if (error) toast.error(error.message);

  if (topRatedMoviesErr) {
    toast.error(topRatedMoviesErr.message);
    return (
      <>
        <div className="flex items-center gap-2 rounded-lg border-l-8 border-l-red-500 bg-slate-200 px-4 py-2 dark:bg-slate-500">
          <p className="">
            Failed to fetch top rated movies. Please try again.
          </p>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <Button className="py-2" onClick={handleRefetch}>
            Retry
            <BsArrowRepeat size={20} className="ml-2" />
          </Button>
          <Button
            className="ml-4 py-2"
            onClick={() => setOpenFeedback(!openFeedback)}
          >
            Report
            <MdBugReport size={20} className="ml-2" />
          </Button>
        </div>
        <Feedback open={openFeedback} setOpen={setOpenFeedback} />
      </>
    );
  }

  if (!q) {
    return (
      <div className="min-h-screen">
        <div className="flex flex-col items-center rounded-lg border-l-8 border-l-yellow-500 bg-slate-200 px-4 py-2 dark:bg-slate-500">
          <h3 className="text-lg font-semibold">
            No search keyword or results found
          </h3>
          <p className="">
            Try different keywords or remove search filters to see more results.
          </p>
        </div>
        <div className="mt-8">
          <h5 className="mb-6 text-xl text-slate-800 dark:text-slate-400">
            Top Rated Movies
          </h5>
          <div className="grid grid-cols-4 gap-4">
            {topRatedMoviesLoading && (
              <SkeletonWrapper height={360} count={12} radius={6} />
            )}
            {topRatedMovies?.results.map((m) => (
              <Card movie={m} key={m.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {!!data?.total_results && (
        <h3 className="mb-6 text-lg dark:text-slate-300">
          🕵 {data?.total_results ?? 0} results found for &lsquo;{q}&lsquo;
        </h3>
      )}
      <div className="grid grid-cols-4 gap-4">
        {isLoading && <SkeletonWrapper height={360} count={12} radius={6} />}
        {(data?.results?.length as number) > 0 ? (
          data?.results.map((m) => <Card movie={m} key={m.id} />)
        ) : (
          <div className="col-span-4 flex min-h-[70vh] w-full items-center justify-center">
            <div className="w-1/3 rounded-lg border-l-8 border-l-yellow-500 bg-slate-200 px-4 py-2 dark:bg-slate-500">
              <h3 className="mb-2 text-lg font-semibold">
                No search keyword or results found
              </h3>
              <p className="">
                Try different keywords or remove search filters to see more
                results.
              </p>
            </div>
          </div>
        )}
      </div>
      <Pagination
        totalPages={data?.total_pages ?? 0}
        page={pageNumber}
        pathname="search"
      />
    </div>
  );
};

SearchPage.PageLayout = MainLayout;
export default SearchPage;
