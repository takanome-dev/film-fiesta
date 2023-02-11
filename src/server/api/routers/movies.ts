import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { http } from '@/server/fetch';

import { getFavoriteMovies } from './favorite';

import type {
  MovieSchema,
  ResponseSchema,
  ReviewResponseSchema,
  TrailerSchema,
} from '@/schemas/movies';
import type { SupabaseAuthClient } from '@/server/db';

const getMoviesWithFavs = async (
  supabase: SupabaseAuthClient,
  userId: string,
  path: string
) => {
  let result = await http<ResponseSchema>(path);

  if (userId) {
    const favMovies = await getFavoriteMovies(supabase, userId);

    const data = result.results.map((movie) => {
      const favMovie = favMovies.find((fav) => fav.movie.id === movie.id);

      return {
        ...movie,
        is_favorite: favMovie?.is_favorite || false,
      };
    });

    result = {
      ...result,
      results: data,
    };
  }

  return result;
};

const moviesRouter = createTRPCRouter({
  discover: publicProcedure.query(async () => {
    const result = await http<ResponseSchema>('/discover/movie');
    return result;
  }),
  getMovies: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
      })
    )
    .query(async ({ ctx, input }) => {
      const response = await getMoviesWithFavs(
        ctx.supabase as SupabaseAuthClient,
        ctx.session?.user?.id ?? '',
        `/movie/now_playing?page=${input.page}`
      );

      return response;
    }),
  getTopRated: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
      })
    )
    .query(async ({ input }) => {
      const result = await http<ResponseSchema>(
        `/movie/top_rated?page=${input.page}`
      );
      return result;
    }),
  getMovieById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const result = await http<MovieSchema>(`/movie/${input.id}`);
      return result;
    }),
  getPopularMovies: publicProcedure
    .input(
      z.object({
        page: z.number(),
      })
    )
    .query(async ({ input }) => {
      const result = await http<ResponseSchema>(
        `/movie/popular?page=${input.page}`
      );
      return result;
    }),
  getTrendingMovies: publicProcedure
    .input(
      z.object({
        page: z.number(),
      })
    )
    .query(async ({ input }) => {
      const result = await http<ResponseSchema>(
        `/trending/movie/day?page=${input.page}`
      );
      return result;
    }),
  getSimilarMovies: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const result = await http<ResponseSchema>(`/movie/${input.id}/similar`);
      return result;
    }),
  getRecommendations: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const result = await http<ResponseSchema>(
        `/movie/${input.id}/recommendations`
      );
      return result;
    }),
  getVideos: publicProcedure
    .input(
      z.object({
        id: z.number().default(1),
      })
    )
    .query(async ({ input }) => {
      const result = await http<TrailerSchema>(`/movie/${input.id}/videos`);
      return result;
    }),
  getReviews: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const result = await http<ReviewResponseSchema>(
        `/movie/${input.id}/reviews`
      );
      return result;
    }),
});

export default moviesRouter;
