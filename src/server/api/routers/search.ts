import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { http } from '@/server/fetch';

import type { ResponseSchema } from '@/schemas/movies';

const searchRouter = createTRPCRouter({
  getMovies: publicProcedure
    .input(
      z.object({ page: z.number().default(1), query: z.string().default('') })
    )
    .query(async ({ input }) => {
      if (!input.query) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Search query is required!',
        });
      }

      const result = await http<ResponseSchema>(
        `/search/movie?query=${input.query}&page=${input.page}`
      );

      return result;
    }),
});

export default searchRouter;
