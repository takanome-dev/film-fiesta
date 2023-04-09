import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { type SupabaseAuthClient } from "@acme/db";
import { favoriteOutputSchema, movieSchema } from "@acme/schema";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const getFavoriteMovies = async (
  supabase: SupabaseAuthClient,
  userId: string,
) => {
  const { data, error } = await supabase
    .from("favorites")
    .select(
      `
      id,
      user,
      movie(*),
      is_favorite,
      created_at,
      updated_at
    `,
    )
    .eq("user", userId);

  if (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
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
        movie: movieSchema.omit({ genres: true, is_favorite: true }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (!input.movie.is_in_db) {
        const { error } = await ctx.supabase.from("movies").insert({
          ...input.movie,
          is_in_db: true,
        });

        if (error) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: error.message,
          });
        }
      }

      const { data, error } = await ctx.supabase
        .from("favorites")
        .select()
        .eq("movie", input.movie.id)
        .eq("user", ctx.session.user.id);

      if (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message,
        });
      }

      if (data?.length) {
        const isFavorite = data[0]?.is_favorite;
        const { error: updateError } = await ctx.supabase
          .from("favorites")
          .update({ is_favorite: !isFavorite })
          .eq("id", data[0]?.id);

        if (updateError) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: updateError.message,
          });
        }

        return {
          message: isFavorite
            ? "Movie removed from favorites"
            : "Movie added to favorites",
        };
      }

      const { error: insertError } = await ctx.supabase
        .from("favorites")
        .insert({
          user: ctx.session.user.id,
          movie: input.movie.id,
          is_favorite: true,
        });

      if (insertError) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: insertError.message,
        });
      }

      return { message: "Movie added to favorites" };
    }),
  getFavorites: protectedProcedure.query(async ({ ctx }) => {
    const data = await getFavoriteMovies(
      ctx.supabase as SupabaseAuthClient,
      ctx.session.user.id,
    );

    const filteredData = data
      .filter((favorite) => favorite.is_favorite)
      .map((fav) => ({
        ...fav,
        movie: {
          ...fav.movie,
          is_favorite: true,
        },
      }));

    return filteredData;
  }),
});

export default favoriteRouter;
