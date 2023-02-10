import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { favoriteOutputSchema } from '@/schemas/favorites';
import { movieSchema } from '@/schemas/movies';
import {
  protectedProcedure,
  createTRPCRouter,
  publicProcedure,
} from '@/server/api/trpc';

const favoriteRouter = createTRPCRouter({
  addFavorite: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        movie: movieSchema.required(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { data, error } = await ctx.supabase
        .from('movies')
        .insert(input.movie)
        .single();

      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }

      const parsedData = movieSchema.parse(data);

      const { error: favoriteError } = await ctx.supabase
        .from('favorites')
        .insert({
          user: input.userId,
          movie: parsedData.id,
        });

      if (favoriteError) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: favoriteError.message,
        });
      }

      return parsedData;
    }),
  getFavorites: protectedProcedure.query(async ({ ctx }) => {
    const { data, error } = await ctx.supabase
      .from('favorites')
      .select(
        `
        id,
        user(id),
        movie(*),
        is_favorite,
        created_at,
        updated_at
      `
      )
      .eq('user', ctx.session.user.id);

    if (error) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: error.message,
      });
    }

    const parsedData = favoriteOutputSchema.parse(data);
    return parsedData;
  }),
});

export default favoriteRouter;
