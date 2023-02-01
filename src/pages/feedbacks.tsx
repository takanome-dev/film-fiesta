import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import MainLayout from '@/layouts/main-layout';
import { api } from '@/lib/utils/api';

import type { WithPageLayout } from '@/types/with-page-layout';

const FeedbacksPage: WithPageLayout = () => {
  const { data, isLoading, error } = api.feedback.getFeedbacks.useQuery();
  console.log({ data });

  // TODO: Add loader and error handling
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold">My Feedbacks</h1>
      <div className="">
        {data?.map((feedback) => (
          <div
            className="border border-slate-200 dark:border-slate-700"
            key={feedback.id}
          >
            <div className="flex items-center p-4">
              <Avatar>
                {/* <AvatarImage src={feedback.userId} alt={user?.name as string} /> */}
                <AvatarFallback>TK</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Author</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Email
                </p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                2023-12-12
              </p>
            </div>
            <div className="mt-4">
              <p className="p-4">{feedback.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FeedbacksPage.PageLayout = MainLayout;
export default FeedbacksPage;
