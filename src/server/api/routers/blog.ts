import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const blogRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      image: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.blog.create({
        data: {
          title: input.title,
          description: input.description,
          image: input.image,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
});


