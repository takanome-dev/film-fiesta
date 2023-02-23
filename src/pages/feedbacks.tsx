import React from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { Circles } from 'react-loader-spinner';

import Error from '@/components/error';
import Meta from '@/components/meta';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Unauthorized from '@/components/unauthorized';
import MainLayout from '@/layouts/main-layout';
import { api } from '@/lib/utils/api';

import type { WithPageLayout } from '@/types/with-page-layout';

const FeedbacksPage: WithPageLayout = () => {
  const { data, isLoading, error, refetch } =
    api.feedback.getFeedbacks.useQuery();

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
    if (error.message === 'UNAUTHORIZED') return <Unauthorized />;
    return <Error handleRefetch={() => refetch()} resourceName="feedbacks" />;
  }

  return (
    <>
      <Meta page="Feedbacks" noindex />
      <div>
        <div className="flex items-center justify-between">
          <h1 className="mb-8 text-2xl font-semibold">My Feedbacks</h1>
          <Button variant="subtle" className="focus:ring-0">
            Refresh <BsArrowRepeat className="ml-2" />
          </Button>
        </div>
        <div className="flex flex-col gap-8">
          {data?.map((feedback) => (
            <div
              className="w-1/2 rounded-lg border border-slate-200 p-4 dark:border-slate-700"
              key={feedback.id}
            >
              <div className="flex justify-between">
                <div className="flex">
                  <Avatar>
                    <AvatarImage
                      src={feedback.user?.image as string}
                      alt={feedback.user?.name}
                    />
                    <AvatarFallback>N/A</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      {feedback.user?.name ?? 'Anonymous'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {feedback.user?.email ?? 'anonymous@example.com'}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {new Intl.DateTimeFormat('en-US').format(
                    new Date(feedback.createdAt) ?? Date.now()
                  )}
                </p>
              </div>
              <div className="my-6">
                <p className="font-mono">{feedback.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

FeedbacksPage.PageLayout = MainLayout;
export default FeedbacksPage;
