import React from "react";
import { CourseForm } from "../ui/course/course-form";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

const CoursePage = async () => {
  const data = await prisma.courseCategory.findMany();
  if (!data) notFound();
  return (
    <div>
      <CourseForm category={data} />
    </div>
  );
};

export default CoursePage;
