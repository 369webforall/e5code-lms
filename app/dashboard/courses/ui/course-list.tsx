import React from "react";
import CourseCard from "./course-card";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

const CourseList = async () => {
  const courses = await prisma.courseCategory.findMany();
  if (!courses) notFound();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          title={course.courseName}
          href={course.courseslug}
        />
      ))}
    </div>
  );
};

export default CourseList;
