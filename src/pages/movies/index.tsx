import { useRouter } from 'next/router';
import React from 'react';

import Card from '@/components/card';
import Pagination from '@/components/pagination';
import SkeletonWrapper from '@/components/skeleton-wrapper';
import MainLayout from '@/layouts/main-layout';
import { api } from '@/lib/utils/api';

import type { WithPageLayout } from '@/types/with-page-layout';

const MoviesPage: WithPageLayout = () => {
  const router = useRouter();
  const { page } = router.query;
  const pageNumber = Number(page) || 1;

  const { data, error, isLoading } = api.movies.getMovies.useQuery({
    page: pageNumber,
  });

  // TODO: handle error
  if (error) return <div>failed to fetch movies: {error.message}</div>;

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {isLoading && <SkeletonWrapper height={370} count={12} radius={6} />}
        {data?.results.map((m) => (
          <Card movie={m} key={m.id} />
        ))}
      </div>
      <Pagination
        totalPages={data?.total_pages ?? 0}
        page={pageNumber}
        pathname="movies"
      />
    </>
  );
};

MoviesPage.PageLayout = MainLayout;
export default MoviesPage;
