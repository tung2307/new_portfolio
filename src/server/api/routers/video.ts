import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const videoRouter = createTRPCRouter({
  getVideo: publicProcedure.query(() => {
    return null;
  }),
});
