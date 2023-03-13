import { useRouter } from 'next/router';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import Card from '@/components/card';
import Error from '@/components/error';
import Meta from '@/components/meta';
import Pagination from '@/components/pagination';
import SkeletonWrapper from '@/components/skeleton-wrapper';
import MainLayout from '@/layouts/main-layout';
import { useSingleStorage } from '@/lib/hooks/useLocalStorage';
import { api } from '@/lib/utils/api';

import type { WithPageLayout } from '@/types/with-page-layout';

const SearchPage: WithPageLayout = () => {
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

  const { data, error, isLoading, refetch } = api.search.getMovies.useQuery({
    query: q as string,
    page: pageNumber,
  });

  const { setItemToStorage } = useSingleStorage('filmfiesta_keywords');

  useEffect(() => {
    if (q) {
      setItemToStorage(q as string);
    }
  }, [q, setItemToStorage]);

  if (error) toast.error(error.message);

  if (topRatedMoviesErr) {
    toast.error(topRatedMoviesErr.message);
    return (
      <Error
        handleRefetch={() => refetchTopRatedMovies()}
        resourceName="top rated movies"
      />
    );
  }

  if (!q) {
    return (
      <>
        <Meta page="Search Movies" />
        <div className="min-h-screen">
          <div className="flex flex-col items-center rounded-lg border-l-8 border-l-yellow-500 bg-slate-200 px-4 py-2 dark:bg-slate-500">
            <h3 className="text-lg font-semibold">
              No search keyword or results found
            </h3>
            <p className="">
              Try different keywords or remove search filters to see more
              results.
            </p>
          </div>
          <div className="mt-8">
            <h5 className="mb-6 text-xl text-slate-800 dark:text-slate-400">
              Top Rated Movies
            </h5>
            <div className="grid grid-cols-[300px] justify-center gap-4 xs:grid-cols-auto-fill">
              {topRatedMoviesLoading && (
                <SkeletonWrapper height={360} count={12} radius={6} />
              )}
              {topRatedMovies?.results.map((m) => (
                <Card
                  movie={m}
                  key={m.id}
                  handleRefetch={refetchTopRatedMovies}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Meta page="Search Movies" />
      <div>
        {!!data?.total_results && (
          <h3 className="mb-6 text-lg dark:text-slate-300">
            🕵 {data?.total_results ?? 0} results found for &lsquo;{q}&lsquo;
          </h3>
        )}
        <div className="grid grid-cols-[250px] gap-4 xs:grid-cols-auto-fill">
          {isLoading && <SkeletonWrapper height={360} count={12} radius={6} />}
          {(data?.results?.length as number) > 0 ? (
            data?.results.map((m) => (
              <Card movie={m} key={m.id} handleRefetch={refetch} />
            ))
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
    </>
  );
};

SearchPage.PageLayout = MainLayout;
export default SearchPage;
