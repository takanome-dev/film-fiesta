import { AiOutlineClose } from 'react-icons/ai';
import { BiTrashAlt } from 'react-icons/bi';
import { z } from 'zod';

import Card from '@/components/card';
import Meta from '@/components/meta';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import MainLayout from '@/layouts/main-layout';
import { useMultipleStorages } from '@/lib/hooks/useLocalStorage';
import { movieSchema, type MovieSchema } from '@/schemas/movies';

import type { WithPageLayout } from '@/types/with-page-layout';

const HistoryPage: WithPageLayout = () => {
  const { getItemsFromStorage, removeItemFromStorage, clearStorage } =
    useMultipleStorages<MovieSchema, string>(
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
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">My History</h1>
          <Button
            variant="subtle"
            className="font-semibold focus:ring-0"
            onClick={clearStorage}
          >
            Clear History <BiTrashAlt className="ml-2 h-4 w-4" />
          </Button>
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
                <Card
                  movie={m}
                  key={m.id}
                  isHistory
                  handleRemoveFromHistory={removeItemFromStorage}
                />
              ))}
            </div>
          </div>
          <ScrollArea className="max-h-[75vh] rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="max-w-md p-4">
              <h2 className="mb-4 text-xl font-semibold">
                Recent searched keywords
              </h2>
              <div className="flex flex-col gap-4 p-2">
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
                    <p className="max-w-[90%] truncate text-sm font-semibold">
                      {k}
                    </p>
                    <Button
                      className="px-2 focus:outline-none"
                      onClick={() =>
                        removeItemFromStorage('filmfiesta_keywords', k)
                      }
                    >
                      <AiOutlineClose className="h-4 w-4 font-bold" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

HistoryPage.PageLayout = MainLayout;
export default HistoryPage;
