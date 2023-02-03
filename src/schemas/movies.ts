import { z } from 'zod';

const movieSchema = z.object({
  adult: z.boolean().optional(),
  backdrop_path: z.string().optional(),
  genre_ids: z.array(z.number()).optional(),
  genres: z.array(z.object({ id: z.number(), name: z.string() })).optional(),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

const responseSchema = z.object({
  dates: z.object({ maximum: z.string(), minimum: z.string() }),
  page: z.number(),
  results: z.array(movieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

const genreSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const videoTrailerSchema = z.object({
  iso_639_1: z.string(),
  iso_3166_1: z.string(),
  name: z.string(),
  key: z.string(),
  site: z.string(),
  size: z.number(),
  type: z.string(),
  official: z.boolean(),
  published_at: z.string(),
  id: z.string(),
});

const trailerSchema = z.object({
  id: z.number(),
  results: z.array(videoTrailerSchema),
});

// export interface MovieDetails {
//   data: Movie;
//   similar: Movie[];
//   videos: VideoTrailer[];
// }

const reviewSchema = z.object({
  author: z.string(),
  author_details: z.object({
    name: z.string(),
    username: z.string(),
    avatar_path: z.string(),
    rating: z.number(),
  }),
  content: z.string(),
  created_at: z.string(),
  id: z.string(),
  updated_at: z.string(),
  url: z.string(),
});

const reviewResponseSchema = z.object({
  id: z.number(),
  page: z.number(),
  results: z.array(reviewSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MovieSchema = z.infer<typeof movieSchema>;
export type ResponseSchema = z.infer<typeof responseSchema>;
export type GenreSchema = z.infer<typeof genreSchema>;
export type VideoTrailerSchema = z.infer<typeof videoTrailerSchema>;
export type TrailerSchema = z.infer<typeof trailerSchema>;
export type ReviewResponseSchema = z.infer<typeof reviewResponseSchema>;
