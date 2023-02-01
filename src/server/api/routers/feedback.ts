import { TRPCError } from '@trpc/server';

import { feedbackSchema, feedbacksOutputSchema } from '@/schemas/feedback';
import {
  adminProcedure,
  createTRPCRouter,
  publicProcedure,
} from '@/server/api/trpc';

const feedbackRouter = createTRPCRouter({
  sendFeedback: publicProcedure
    .input(feedbackSchema)
    .mutation(async ({ ctx, input }) => {
      const { data, error } = await ctx.supabase
        .from('feedbacks')
        .insert(input);

      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }

      return data;
    }),
  getFeedbacks: adminProcedure
    .output(feedbacksOutputSchema)
    .query(async ({ ctx }) => {
      const { data, error } = await ctx.supabase.from('feedbacks').select(`
        id,
        emojiName,
        emojiCode,
        createdAt,
        updatedAt,
        message,
        user (
          id,
          name,
          email,
          image
        )
      `);

      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }

      return data;
    }),
});

export default feedbackRouter;
