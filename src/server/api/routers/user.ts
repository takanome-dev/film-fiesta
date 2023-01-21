import { TRPCError } from '@trpc/server';

import { loginSchema } from '@/schemas/user';

import { createTRPCRouter, publicProcedure } from '../trpc';

const userRouter = createTRPCRouter({
  login: publicProcedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    console.log({ input });
    // const user = await ctx.prisma.user.findUnique({
    //   where: {
    //     email: input.email,
    //   },
    // });

    // if (!user) {
    //   throw new TRPCError({
    //     code: 'BAD_REQUEST',
    //     message: 'Invalid email or password',
    //   });
    // }

    // const isValidPassword = await ctx.bcrypt.compare(
    //   input.password,
    //   user.password
    // );

    // if (!isValidPassword) {
    //   throw new Error('Invalid password');
    // }

    // ctx.session.user = user;

    return 'User logged in';
  }),
});

export default userRouter;
