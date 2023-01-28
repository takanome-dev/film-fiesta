import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { http } from '@/server/fetch';

import type { ResponseSchema } from '@/schemas/movies';

const searchRouter = createTRPCRouter({
  getMovies: publicProcedure
    .input(z.object({ page: z.number(), query: z.string() }))
    .query(async ({ input }) => {
      const result = await http<ResponseSchema>(
        `/search/movie?query=${input.query}&page=${input.page}`
      );
      return result;
    }),
});

export default searchRouter;
