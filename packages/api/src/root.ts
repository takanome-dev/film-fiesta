import favoriteRouter from "./router/favorite";
import feedbackRouter from "./router/feedback";
import moviesRouter from "./router/movies";
import searchRouter from "./router/search";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  movies: moviesRouter,
  search: searchRouter,
  feedback: feedbackRouter,
  favorite: favoriteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
