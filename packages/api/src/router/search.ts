import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { type ResponseSchema } from "@acme/schema";

import { http } from "../fetch";
import { createTRPCRouter, publicProcedure } from "../trpc";

const searchRouter = createTRPCRouter({
  getMovies: publicProcedure
    .input(
      z.object({ page: z.number().default(1), query: z.string().default("") }),
    )
    .query(async ({ input }) => {
      if (!input.query) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Search query is required!",
        });
      }

      const result = await http<ResponseSchema>(
        `/search/movie?query=${input.query}&page=${input.page}`,
      );

      return result;
    }),
});

export default searchRouter;
