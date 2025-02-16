/**
 * This is the primary router for your server.
 *
 * All routers added in /server/src/routers should be manually added here.
 */

import { postRouter } from "./post/post.router";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
