import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { favoriteOutputSchema } from '@/schemas/favorites';
import { movieSchema } from '@/schemas/movies';
import { protectedProcedure, createTRPCRouter } from '@/server/api/trpc';

import type { SupabaseAuthClient } from '@/server/db';

export const getFavoriteMovies = async (
  supabase: SupabaseAuthClient,
  userId: string
) => {
  const { data, error } = await supabase
    .from('favorites')
    .select(
      `
      id,
      user(id),
      movie(*),
      created_at,
      updated_at
    `
    )
    .eq('user', userId);

  if (error) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: error.message,
    });
  }

  const parsedData = favoriteOutputSchema.parse(data);
  return parsedData;
};

const favoriteRouter = createTRPCRouter({
  addFavorite: protectedProcedure
    .input(
      z.object({
        movie: movieSchema.omit({ genres: true }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (input.movie.is_favorite || input.movie.is_in_db) {
        const { error } = await ctx.supabase
          .from('movies')
          .update({ is_favorite: false })
          .eq('id', input.movie.id);

        if (error) {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: error.message,
          });
        }

        return { message: 'Movie removed from favorites' };
      }

      const { error } = await ctx.supabase
        .from('movies')
        .upsert(
          { ...input.movie, is_favorite: true },
          {
            onConflict: 'id',
            ignoreDuplicates: false,
          }
        )
        .select();

      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }

      const { error: favoriteError } = await ctx.supabase
        .from('favorites')
        .insert({
          user: ctx.session.user.id,
          movie: input.movie.id,
        });

      if (favoriteError) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: favoriteError.message,
        });
      }

      return { message: 'Movie added to favorites' };
    }),
  getFavorites: protectedProcedure.query(async ({ ctx }) => {
    const data = await getFavoriteMovies(
      ctx.supabase as SupabaseAuthClient,
      ctx.session.user.id
    );

    const filteredData = data.filter((favorite) => favorite.movie.is_favorite);
    return filteredData;
  }),
});

export default favoriteRouter;
