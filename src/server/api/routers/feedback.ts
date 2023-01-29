import { feedbackSchema } from '@/schemas/feedback';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

const feedbackRouter = createTRPCRouter({
  sendFeedback: publicProcedure
    .input(feedbackSchema)
    .mutation(({ input }) => input),
});

export default feedbackRouter;
