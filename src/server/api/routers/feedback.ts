import { TRPCError } from '@trpc/server';

import { feedbackSchema } from '@/schemas/feedback';
import {
  adminProcedure,
  createTRPCRouter,
  publicProcedure,
} from '@/server/api/trpc';

const feedbackRouter = createTRPCRouter({
  sendFeedback: publicProcedure
    .input(feedbackSchema)
    .mutation(async ({ ctx, input }) => {
      const { data, error } = await ctx.supabase.from('feedback').insert(input);

      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }

      return data;
    }),
  getFeedbacks: adminProcedure.query(async ({ ctx }) => {
    const { data, error } = await ctx.supabase.from('feedbacks').select(`
        id,
        emoji_name,
        emoji_code,
        created_at,
        message,
        user_id (
          id,
          name,
          email
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
