import { useRouter } from 'next/router';
import React from 'react';

import Card from '@/components/card';
import Error from '@/components/error';
import Meta from '@/components/meta';
import Pagination from '@/components/pagination';
import SkeletonWrapper from '@/components/skeleton-wrapper';
import MainLayout from '@/layouts/main-layout';
import { api } from '@/lib/utils/api';

import type { WithPageLayout } from '@/types/with-page-layout';

const TrendingPage: WithPageLayout = () => {
  const router = useRouter();
  const { page } = router.query;
  const pageNumber = Number(page) || 1;

  const { data, error, isLoading, refetch } =
    api.movies.getTrendingMovies.useQuery({
      page: pageNumber,
    });

  if (error) {
    return <Error handleRefetch={() => refetch()} resourceName="trending" />;
  }

  return (
    <>
      <Meta page="Settings" />
      <div className="grid grid-cols-1 justify-center gap-4 xs:grid-cols-auto-fill">
        {isLoading && <SkeletonWrapper height={370} count={12} radius={6} />}
        {data?.results.map((m) => (
          <Card movie={m} key={m.id} handleRefetch={refetch} />
        ))}
      </div>
      <Pagination
        totalPages={data?.total_pages ?? 0}
        page={pageNumber}
        pathname="trending"
      />
    </>
  );
};

TrendingPage.PageLayout = MainLayout;
export default TrendingPage;
