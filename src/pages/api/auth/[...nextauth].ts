import { SupabaseAdapter } from '@next-auth/supabase-adapter';
import jwt from 'jsonwebtoken';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { env as clientEnv } from '@/env/client.mjs';
import { env as serverEnv } from '@/env/server.mjs';

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
    EmailProvider({
      server: {
        // TODO: use real email server
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: serverEnv.EMAIL_SERVER_USER,
          pass: serverEnv.EMAIL_SERVER_PASSWORD,
        },
      },
      from: serverEnv.EMAIL_FROM,
    }),
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
};

export default NextAuth(authOptions);
