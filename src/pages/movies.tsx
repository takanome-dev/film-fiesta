import React from 'react';

import Card from '@/components/card';
import Pagination from '@/components/pagination';
import MainLayout from '@/layouts/main-layout';
import data from '@/server/movies.json';

import type { WithPageLayout } from '@/types/with-page-layout';

const MoviesPage: WithPageLayout = () => {
  const movies = data.results;

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {movies?.map((m) => (
          <Card movie={m} key={m.id} />
        ))}
      </div>
      <Pagination page={1} totalPages={20} />
    </>
  );
};

MoviesPage.PageLayout = MainLayout;
export default MoviesPage;
