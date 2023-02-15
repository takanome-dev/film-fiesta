import favoriteRouter from './routers/favorite';
import feedbackRouter from './routers/feedback';
import moviesRouter from './routers/movies';
import searchRouter from './routers/search';
import userRouter from './routers/user';
import { createTRPCRouter } from './trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  movies: moviesRouter,
  search: searchRouter,
  feedback: feedbackRouter,
  favorite: favoriteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
