import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const videoRouter = createTRPCRouter({
  getVideo: publicProcedure.query(() => {}),
});
