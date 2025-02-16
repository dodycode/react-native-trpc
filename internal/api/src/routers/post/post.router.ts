import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    console.log("test");

    return {
      message: "Hello from TRPC!"
    }
  }),
});
