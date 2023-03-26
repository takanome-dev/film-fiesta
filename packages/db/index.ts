import { createClient } from "@supabase/supabase-js";

import { env } from "@acme/schema";

import type { Database } from "./supabase/schema";

// export const supabase = createClient<Database>(
//   env.NEXT_PUBLIC_SUPABASE_URL,
//   env.NEXT_PUBLIC_SUPABASE_API_KEY,
// );

export const getSupabaseClient = (token?: string) => {
  return createClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_API_KEY,
    token
      ? {
          global: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        }
      : undefined,
  );
};

export type SupabaseAuthClient = ReturnType<typeof createClient>;
