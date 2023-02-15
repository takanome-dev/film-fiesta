import { SupabaseAdapter } from '@next-auth/supabase-adapter';
import jwt from 'jsonwebtoken';
import NextAuth, { type NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
import DiscordProvider from 'next-auth/providers/discord';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { env as clientEnv } from '@/env/client.mjs';
import { env as serverEnv } from '@/env/server.mjs';

// import type { LoginSchema } from '@/schemas/user';

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  debug: serverEnv.NODE_ENV === 'development',
  callbacks: {
    session({ session, user }) {
      const signingSecret = serverEnv.SUPABASE_JWT_SECRET;

      if (signingSecret) {
        const payload = {
          aud: 'authenticated',
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          sub: user?.id,
          email: user?.email,
          role: 'authenticated',
        };

        session.supabaseAccessToken = jwt.sign(payload, signingSecret);
      }

      if (session.user) {
        session.user.id = user.id;
        session.user.isAdmin = user.isAdmin;
      }

      return session;
    },
    redirect({ url, baseUrl }) {
      // TODO: add user last page visited in the session
      console.log({ url, baseUrl });
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  // Configure one or more authentication providers
  adapter: SupabaseAdapter({
    url: clientEnv.NEXT_PUBLIC_SUPABASE_URL,
    secret: serverEnv.SUPABASE_SERVICE_ROLE_KEY,
  }),
  providers: [
    DiscordProvider({
      clientId: serverEnv.DISCORD_CLIENT_ID,
      clientSecret: serverEnv.DISCORD_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: serverEnv.GITHUB_CLIENT_ID,
      clientSecret: serverEnv.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: serverEnv.GOOGLE_CLIENT_ID,
      clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. "Sign in with...")
    //   name: 'Credentials',
    //   // `credentials` is used to generate a form on the sign in page.
    //   // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {},
    //   async authorize(credentials: LoginSchema, req) {
    //     // Add logic here to look up the user from the credentials supplied
    //     const { email, password } = credentials;
    //     if (email !== 'test@test.com' || password !== 'password') {
    //       // Any object returned will be saved in `user` property of the JWT
    //       throw new Error('Invalid email or password');
    //     }
    //     return null;

    //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
    //   },
    // }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
  // pages: {
  //   signIn: '/register',
  // },
};

export default NextAuth(authOptions);
