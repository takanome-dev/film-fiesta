import { env } from "@/env/client.mjs";
import { PrismaClient } from "@prisma/client";
// ----------------------------------------------------------

import { createClient } from "@supabase/supabase-js";
import type { Database } from "supabase/schema";

export * from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const supabase = createClient<Database>(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_API_KEY,
);

export type SupabaseAuthClient = ReturnType<typeof createClient>;
