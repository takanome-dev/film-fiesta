import { TRPCError } from '@trpc/server';

import { env as clientEnv } from '@/env/client.mjs';
import { env as serverEnv } from '@/env/server.mjs';

export const http = <T>(url: string, options?: RequestInit): Promise<T> =>
  fetch(`${clientEnv.NEXT_PUBLIC_TMDB_URL}/${url}`, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${serverEnv.TMDB_BEARER_TOKEN}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: res.statusText,
      });
    }
    return res.json() as Promise<T>;
  });
