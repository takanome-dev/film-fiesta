import { z } from 'zod';

export const feedbackSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  message: z.string(),
  emojiCode: z.string(),
});

export type FeedbackSchema = z.infer<typeof feedbackSchema>;
