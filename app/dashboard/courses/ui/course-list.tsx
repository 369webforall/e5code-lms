import React from "react";
import CourseCard from "./course-card";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

// const courses1 = [
//   {
//     courseId: "htmlcss",
//     title: "HTML & CSS",
//     href: "/dashboard/courses/htmlcss",
//   },

//   {
//     courseId: "javascript",
//     title: "JavaScript",
//     href: "/dashboard/courses/javascript",
//   },
//   {
//     courseId: "reactjs",
//     title: "React/Nextjs",
//     href: "/dashboard/courses/reactjs",
//   },
//   {
//     courseId: "nodejs",
//     title: "Node.js/Express",
//     href: "/dashboard/courses/nodejs",
//   },

//   {
//     courseId: "mongodb",
//     title: "MongoDB",
//     href: "/dashboard/courses/mongodb",
//   },
//   {
//     courseId: "sql",
//     title: "SQL",
//     href: "/dashboard/courses/sql",
//   },
//   {
//     courseId: "postgresql",
//     title: "PostgreSQL",
//     href: "/dashboard/courses/postgresql",
//   },
//   {
//     courseId: "tailwind",
//     title: "Tailwind CSS",
//     href: "/dashboard/courses/tailwind",
//   },

//   {
//     courseId: "radixui",
//     title: "Radix UI",
//     href: "/dashboard/courses/radixui",
//   },
//   {
//     courseId: "dsa",
//     title: "Data Structures and Algorithms",
//     href: "/dashboard/courses/dsa",
//   },
//   {
//     courseId: "zod",
//     title: "Zod",
//     href: "/dashboard/courses/zod",
//   },
//   {
//     courseId: "jobsearch",
//     title: "Branding & Networking",
//     href: "/dashboard/courses/jobsearch",
//   },
//   {
//     courseId: "interviewprocess",
//     title: "The Interview Process",
//     href: "/dashboard/courses/interviewprocess",
//   },
// ];

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
