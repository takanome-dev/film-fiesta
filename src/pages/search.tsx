import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-hot-toast';

import Card from '@/components/card';
import Pagination from '@/components/pagination';
import SkeletonWrapper from '@/components/skeleton-wrapper';
import MainLayout from '@/layouts/main-layout';
import { api } from '@/utils/api';

import type { WithPageLayout } from '@/types/with-page-layout';

const SearchPage: WithPageLayout = () => {
  const router = useRouter();
  const { q, page } = router.query;

  const pageNumber = page ? Number(page) : 1;

  const {
    data: topRatedMovies,
    error: topRatedMoviesErr,
    isLoading: topRatedMoviesLoading,
  } = api.movies.getTopRated.useQuery({
    page: pageNumber,
  });

  const { data, error, isLoading } = api.search.getMovies.useQuery({
    query: q as string,
    page: pageNumber,
  });

  console.log({
    searchError: error?.message,
    ratedError: topRatedMoviesErr?.message,
  });

  if (error) toast.error(`failed to search: ${error.message}`);

  if (topRatedMoviesErr) {
    toast.error(
      `failed to fetch top rated movies: ${topRatedMoviesErr.message}`
    );
  }

  // TODO: handle empty search
  if (!q) {
    return (
      <div className="min-h-screen">
        <div className="flex flex-col items-center rounded-lg border-l-8 border-l-yellow-500 bg-slate-300 px-4 py-2 dark:bg-slate-500">
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
      <h3 className="mb-6 text-lg dark:text-slate-300">
        🕵 {data?.total_results ?? 0} results found for &lsquo;{q}&lsquo;
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {isLoading && <SkeletonWrapper height={360} count={12} radius={6} />}
        {data?.results.map((m) => (
          <Card movie={m} key={m.id} />
        ))}
      </div>
      <Pagination
        totalPages={data?.total_pages ?? 0}
        page={pageNumber}
        pathname="movies"
      />
    </div>
  );
};

SearchPage.PageLayout = MainLayout;
export default SearchPage;
