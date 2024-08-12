import { z } from "zod";

export const categoryformSchema = z.object({
  courseslug: z.string().min(2, {
    message: "courseslug must be at least 2 characters.",
  }),
  courseName: z.string().min(2, {
    message: "courseName must be at least 2 characters.",
  }),
});

export const courseformSchema = z.object({
  courseslug: z.string().min(2, {
    message: "courseslug must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "course title must be at least 2 characters.",
  }),
  github: z.string().url({ message: "github url is required" }),
  video: z.string().min(2, {
    message: "video code is required.",
  }),
});
