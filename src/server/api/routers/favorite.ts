import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { favoriteOutputSchema } from '@/schemas/favorites';
import { movieSchema } from '@/schemas/movies';
import { protectedProcedure, createTRPCRouter } from '@/server/api/trpc';

const favoriteRouter = createTRPCRouter({
  addFavorite: protectedProcedure
    .input(
      z.object({
        movie: movieSchema.omit({ genres: true }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { error } = await ctx.supabase
        .from('movies')
        .upsert(input.movie, {
          onConflict: 'id',
          ignoreDuplicates: false,
        })
        .select();

      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }

      const { data, error: favoriteError } = await ctx.supabase
        .from('favorites')
        .insert({
          user: ctx.session.user.id,
          movie: input.movie.id,
        });

      console.log('===========================================');
      console.log({ data, favoriteError });
      console.log('===========================================');

      if (favoriteError) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: favoriteError.message,
        });
      }

      return data;
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
