import { z } from 'zod';

export const feedbackSchema = z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  emojiName: z.string().default(''),
  emojiCode: z.string().default(''),
  created_at: z.string().optional(),
  message: z.string(),
});

export type FeedbackSchema = z.infer<typeof feedbackSchema>;
