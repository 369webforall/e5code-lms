"use server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { categoryformSchema, courseformSchema } from "./courseSchema";

export async function createCategory(
  values: z.infer<typeof categoryformSchema>
) {
  try {
    const parsedData = categoryformSchema.safeParse(values);

    if (!parsedData.success) {
      return { error: "No data", success: false };
    }

    const { courseslug, courseName } = parsedData.data;

    // Create a new course category in the database
    const newCategory = await prisma.courseCategory.create({
      data: {
        courseslug: courseslug,
        courseName: courseName,
      },
    });

    return { message: "Category created", success: true };
  } catch (error) {
    return { error: "Something went wrong", success: false };
  }
}

export async function createCourse(values: z.infer<typeof courseformSchema>) {
  try {
    const category = prisma.courseCategory.findUnique({
      where: {
        courseslug: values.courseslug,
      },
    });
    if (!category) {
      return { error: "No category found", success: false };
    }

    const parsedData = courseformSchema.safeParse(values);

    if (!parsedData.success) {
      return { error: "No data", success: false };
    }

    const { courseslug, title, github, video } = parsedData.data;

    // Create a new course category in the database
    const newCourse = await prisma.course.create({
      data: {
        courseslug: courseslug,
        title: title,
        github: github,
        video: video,
      },
    });

    return { message: "Course created", success: true };
  } catch (error) {
    return { error: "Something went wrong", success: false };
  }
}
