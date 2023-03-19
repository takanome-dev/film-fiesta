import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { Circles } from 'react-loader-spinner';

import Card from '@/components/card';
import Error from '@/components/error';
import Meta from '@/components/meta';
import { Button } from '@/components/ui/button';
import Unauthorized from '@/components/unauthorized';
import MainLayout from '@/layouts/main-layout';
import { api } from '@/lib/utils/api';

import type { WithPageLayout } from '@/types/with-page-layout';

const FavoritePage: WithPageLayout = () => {
  const router = useRouter();
  const { data, isLoading, error, refetch } =
    api.favorite.getFavorites.useQuery();

  const handleRefetchFavorites = () => {
    refetch().catch(console.error);
  };

  useEffect(() => {
    refetch().catch(console.error);
  }, [refetch]);

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Circles
          height="80"
          width="80"
          color="#475569"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible
        />
      </div>
    );
  }

  if (error) {
    if (error.message === 'UNAUTHORIZED') {
      return <Unauthorized needSignIn />;
    }
    return <Error handleRefetch={() => refetch()} resourceName="favorites" />;
  }

  return (
    <>
      <Meta page="Favorite Movies" noindex />
      <div>
        <div className="flex items-center justify-between">
          <h1 className="mb-8 text-2xl font-semibold">My Favorites</h1>
          <Button
            variant="subtle"
            className="focus:ring-0"
            onClick={handleRefetchFavorites}
          >
            Refresh <BsArrowRepeat className="ml-2" />
          </Button>
        </div>
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 xs:grid-cols-auto-fill">
            {data?.map((fav) => (
              <Card movie={fav.movie} key={fav.id} handleRefetch={refetch} />
            ))}
          </div>
        ) : (
          <div className="flex h-96 flex-col items-center justify-center">
            <p className="text-xl font-semibold">No favorites yet ❤</p>
            <p className="my-6">Browse the movies and add your favorites</p>
            <Button
              variant="outline"
              onClick={() => {
                router.push('/movies').catch(console.error);
              }}
            >
              Explore movies
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

FavoritePage.PageLayout = MainLayout;
export default FavoritePage;
