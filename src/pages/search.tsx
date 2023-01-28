import { useRouter } from 'next/router';
import React from 'react';

import SkeletonWrapper from '@/components/skeleton-wrapper';
import MainLayout from '@/layouts/main-layout';
import { api } from '@/utils/api';

import type { WithPageLayout } from '@/types/with-page-layout';

const SearchPage: WithPageLayout = () => {
  const router = useRouter();
  const { q, page } = router.query;

  const { data, error, isLoading } = api.search.getMovies.useQuery({
    query: q as string,
    page: Number(page),
  });

  if (error) return <div>failed to search: {error.message}</div>;

  // TODO: handle empty search
  if (!q) return <div>Search for something</div>;

  return (
    <div>
      {isLoading && <SkeletonWrapper height={370} count={12} radius={6} />}
      <h3>
        {data?.total_results} results found for {q}
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {data?.results.map((m) => (
          <div key={m.id}>{m.title}</div>
        ))}
      </div>
    </div>
  );
};

SearchPage.PageLayout = MainLayout;
export default SearchPage;
