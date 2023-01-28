import { useRouter } from 'next/router';
import React from 'react';

import Card from '@/components/card';
import Pagination from '@/components/pagination';
import MainLayout from '@/layouts/main-layout';
import { api } from '@/utils/api';

import type { WithPageLayout } from '@/types/with-page-layout';

const PopularPage: WithPageLayout = () => {
  const router = useRouter();
  const { page } = router.query;
  const pageNumber = Number(page) || 1;

  const { data, error } = api.movies.getPopularMovies.useQuery({
    page: pageNumber,
  });

  // TODO: handle error
  if (error) return <div>failed to fetch movies: {error.message}</div>;

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {data?.results.map((m) => (
          <Card movie={m} key={m.id} />
        ))}
      </div>
      <Pagination totalPages={data?.total_pages ?? 0} page={pageNumber} />
    </>
  );
};

PopularPage.PageLayout = MainLayout;
export default PopularPage;
