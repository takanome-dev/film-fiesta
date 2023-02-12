import { z } from 'zod';

import { movieSchema } from './movies';

export const favoriteSchema = z.object({
  id: z.string().optional(),
  user: z.string().optional(),
  movie: z.string().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});

export const favoriteOutputSchema = z.array(
  z.object({
    id: z.string().optional(),
    user: z.object({
      id: z.string().optional(),
    }),
    movie: movieSchema,
    created_at: z.string().optional(),
    updated_at: z.string().optional(),
  })
);

export type FavoriteSchema = z.infer<typeof favoriteSchema>;
