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
  name: z.string(),
  key: z.string(),
});

// export interface MovieDetails {
//   data: Movie;
//   similar: Movie[];
//   videos: VideoTrailer[];
// }

export type MovieSchema = z.infer<typeof movieSchema>;
export type ResponseSchema = z.infer<typeof responseSchema>;
export type GenreSchema = z.infer<typeof genreSchema>;
export type VideoTrailerSchema = z.infer<typeof videoTrailerSchema>;
