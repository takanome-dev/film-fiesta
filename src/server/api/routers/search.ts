import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { http } from '@/server/fetch';

import type { MovieSchema } from '@/schemas/movies';

const searchRouter = createTRPCRouter({
  getMovies: publicProcedure
    .input(z.object({ page: z.number(), query: z.string() }))
    .query(async ({ input }) => {
      const result = await http<MovieSchema>(
        `/search/movie?query=${input.query}&page=${input.page}`
      );
      return result;
    }),
});

export default searchRouter;
