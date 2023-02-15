import { TRPCError } from '@trpc/server';

import { loginSchema, registerSchema } from '@/schemas/user';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

const userRouter = createTRPCRouter({
  login: publicProcedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    const { data } = await ctx.supabase.auth.signInWithPassword({
      email: input.email,
      password: input.password,
    });

    if (!data.user) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Invalid email or password',
      });
    }

    ctx.session = {
      ...data.session,
      expires: data.session?.expires_in.toString() as string,
      user: data.user,
    };

    return data.user;
  }),
  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ input, ctx }) => {
      const { data } = await ctx.supabase.auth.signUp({
        email: input.email,
        password: input.password,
      });

      if (!data.user) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Invalid email or password',
        });
      }

      ctx.session = {
        ...data.session,
        expires: data.session?.expires_in.toString() as string,
        user: data.user,
      };

      return data.user;
    }),
});

export default userRouter;
