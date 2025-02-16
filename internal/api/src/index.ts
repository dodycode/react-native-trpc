import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { trpcServer } from "@hono/trpc-server";

import { AppRouter, appRouter } from "./routers/_app";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// mapping tRPC routes
app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
);

/**
 * Inference helpers for input types
 * @example
 * type PostByIdInput = RouterInputs['post']['byId']
 *      ^? { id: number }
 **/
type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example
 * type AllPostsOutput = RouterOutputs['post']['all']
 *      ^? Post[]
 **/
type RouterOutputs = inferRouterOutputs<AppRouter>;

export const handler = handle(app);

export type { RouterInputs, RouterOutputs, AppRouter };
