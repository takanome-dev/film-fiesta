import { useRouter } from 'next/router';
import React from 'react';

import Card from '@/components/card';
import Pagination from '@/components/pagination';
import MainLayout from '@/layouts/main-layout';
import data from '@/server/movies.json';

import type { WithPageLayout } from '@/types/with-page-layout';

const MoviesPage: WithPageLayout = () => {
  const movies = data.results;
  const router = useRouter();
  const { page } = router.query;
  const pageNumber = Number(page) || 1;

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {movies?.map((m) => (
          <Card movie={m} key={m.id} />
        ))}
      </div>
      <Pagination page={pageNumber} totalPages={20} />
    </>
  );
};

MoviesPage.PageLayout = MainLayout;
export default MoviesPage;
