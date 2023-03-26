import { z } from "zod";

import { type SupabaseAuthClient } from "@acme/db";
import type {
  MovieSchema,
  ResponseSchema,
  ReviewResponseSchema,
  TrailerSchema,
} from "@acme/schema";

import { http } from "../fetch";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { getFavoriteMovies } from "./favorite";

const getMoviesWithFavs = async (
  supabase: SupabaseAuthClient,
  userId: string,
  path: string,
) => {
  let result = await http<ResponseSchema>(path);

  const { data: moviesData } = await supabase.from("movies").select("id");

  const parsedData = z.array(z.object({ id: z.number() })).parse(moviesData);

  result.results = result.results.map((movie) => {
    const isInDb = parsedData.find((dbMovie) => dbMovie.id === movie.id);

    return {
      ...movie,
      is_in_db: !!isInDb,
    };
  });

  if (userId) {
    const favMovies = await getFavoriteMovies(supabase, userId);

    const data = result.results.map((movie) => {
      const favMovie = favMovies.find((fav) => fav.movie.id === movie.id);

      return {
        ...movie,
        is_favorite: favMovie?.is_favorite ?? false,
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
    const result = await http<ResponseSchema>("/discover/movie");
    return result;
  }),
  getMovies: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      console.log({ session: ctx.session, input });
      const response = await getMoviesWithFavs(
        ctx.supabase as SupabaseAuthClient,
        ctx.session?.user?.id ?? "",
        `/movie/now_playing?page=${input.page}`,
      );

      return response;
    }),
  getTopRated: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      const response = await getMoviesWithFavs(
        ctx.supabase as SupabaseAuthClient,
        ctx.session?.user?.id ?? "",
        `/movie/top_rated?page=${input.page}`,
      );

      return response;
    }),
  getMovieById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const result = await http<MovieSchema>(`/movie/${input.id}`);

      if (ctx.session?.user?.id) {
        const favMovies = await getFavoriteMovies(
          ctx.supabase as SupabaseAuthClient,
          ctx.session.user.id,
        );

        const favMovie = favMovies.find((fav) => fav.movie.id === result.id);

        return {
          ...result,
          is_favorite: favMovie?.is_favorite ?? false,
        };
      }

      return result;
    }),
  getPopularMovies: publicProcedure
    .input(
      z.object({
        page: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const response = await getMoviesWithFavs(
        ctx.supabase as SupabaseAuthClient,
        ctx.session?.user?.id ?? "",
        `/movie/popular?page=${input.page}`,
      );

      return response;
    }),
  getTrendingMovies: publicProcedure
    .input(
      z.object({
        page: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const response = await getMoviesWithFavs(
        ctx.supabase as SupabaseAuthClient,
        ctx.session?.user?.id ?? "",
        `/trending/movie/day?page=${input.page}`,
      );

      return response;
    }),
  getSimilarMovies: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const response = await getMoviesWithFavs(
        ctx.supabase as SupabaseAuthClient,
        ctx.session?.user?.id ?? "",
        `/movie/${input.id}/similar`,
      );

      return response;
    }),
  getRecommendations: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const response = await getMoviesWithFavs(
        ctx.supabase as SupabaseAuthClient,
        ctx.session?.user?.id ?? "",
        `/movie/${input.id}/recommendations`,
      );

      return response;
    }),
  getVideos: publicProcedure
    .input(
      z.object({
        id: z.number().default(1),
      }),
    )
    .query(async ({ input }) => {
      const result = await http<TrailerSchema>(`/movie/${input.id}/videos`);
      return result;
    }),
  getReviews: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const result = await http<ReviewResponseSchema>(
        `/movie/${input.id}/reviews`,
      );
      return result;
    }),
});

export default moviesRouter;
