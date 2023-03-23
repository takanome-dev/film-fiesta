import favoriteRouter from "./routers/favorite";
import feedbackRouter from "./routers/feedback";
import moviesRouter from "./routers/movies";
import searchRouter from "./routers/search";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  movies: moviesRouter,
  search: searchRouter,
  feedback: feedbackRouter,
  favorite: favoriteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
