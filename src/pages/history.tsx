import { z } from 'zod';

import Card from '@/components/card';
import Meta from '@/components/meta';
import MainLayout from '@/layouts/main-layout';
import { useMultipleStorages } from '@/lib/hooks/useLocalStorage';
import { movieSchema, type MovieSchema } from '@/schemas/movies';

import type { WithPageLayout } from '@/types/with-page-layout';

const HistoryPage: WithPageLayout = () => {
  const { getItemsFromStorage } = useMultipleStorages<MovieSchema[], string[]>(
    'filmfiesta_movies',
    'filmfiesta_keywords'
  );

  const histories = getItemsFromStorage('filmfiesta_movies');
  const keywords = getItemsFromStorage('filmfiesta_keywords');

  const parsedHistories = z.array(movieSchema).parse(histories);
  const parsedKeywords = z.array(z.string()).parse(keywords);

  return (
    <>
      <Meta page="History" noindex />
      <div>
        <div className="flex items-center justify-between">
          <h1 className="mb-8 text-2xl font-semibold">My History</h1>
        </div>
        <div className="flex gap-8">
          <div className="flex-1">
            <h2 className="mb-4 text-xl font-semibold">
              Recent visited movies
            </h2>
            <div className="grid grid-cols-[250px] gap-4 xs:grid-cols-auto-fill">
              {parsedHistories.length === 0 && (
                <div className="">
                  <p className="mt-10 text-center text-lg">No history yet 🕵</p>
                </div>
              )}
              {parsedHistories.map((m) => (
                <Card movie={m} key={m.id} />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <h2 className="mb-4 text-xl font-semibold">
              Recent searched keywords
            </h2>
            <div className="flex flex-col gap-4 p-4">
              {parsedKeywords.length === 0 && (
                <p className="mt-10 text-center text-lg">
                  No keywords found 🤷
                </p>
              )}
              {parsedKeywords.map((k) => (
                <div
                  className="flex items-center justify-between rounded-lg bg-slate-100 px-4 py-2 dark:bg-slate-800"
                  key={k}
                >
                  <p className="text-sm font-semibold">{k}</p>
                  <button className="focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414l-5.293 5.293 5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HistoryPage.PageLayout = MainLayout;
export default HistoryPage;
