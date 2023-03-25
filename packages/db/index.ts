import { createClient } from "@supabase/supabase-js";

import { env } from "@acme/schemas";

import type { Database } from "./supabase/schema";

export const supabase = createClient<Database>(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_API_KEY,
);

export type SupabaseAuthClient = ReturnType<typeof createClient>;
