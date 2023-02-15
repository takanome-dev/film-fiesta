import { z } from 'zod';

import { userSchema } from './user';

export const feedbackSchema = z.object({
  id: z.string().optional(),
  user: z.string().optional(),
  emojiName: z.string().optional(),
  emojiCode: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  message: z.string(),
});

export const feedbacksOutputSchema = z.array(
  z.object({
    id: z.string(),
    user: userSchema.nullable(),
    emojiName: z.string().nullable(),
    emojiCode: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
    message: z.string().nullable(),
  })
);

export type FeedbackSchema = z.infer<typeof feedbackSchema>;
export type FeedbacksOutputSchema = z.infer<typeof feedbacksOutputSchema>;
