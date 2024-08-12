"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import CourseDetails from "../ui/course-details";
import { Button } from "@/components/ui/button";

// Define the shape of the data from the database
type CourseData = {
  id: string;
  courseslug: string;
  title: string;
  github: string;
  video: string;
};

// Define the props for the page
interface CourseDetailsPageProps {
  params: { courseslug: string };
}

// Function to fetch course data from the API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CourseDetailsPage = ({ params }: CourseDetailsPageProps) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use SWR to fetch and cache data
  const { data: courses, error } = useSWR<CourseData[]>(
    `http://localhost:3000/api/courses/${params.courseslug}`,
    fetcher
  );

  if (error) {
    router.push("/dashboard/courses");
    return <div>Failed to load</div>;
  }

  if (!courses || courses.length === 0) {
    return <div>Loading...</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : courses.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < courses.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <Button onClick={handlePrev} className="cursor-pointer">
          Previous
        </Button>
        <Button onClick={handleNext} className="cursor-pointer">
          Next
        </Button>
      </div>

      <CourseDetails course={courses[currentIndex]} />
    </div>
  );
};

export default CourseDetailsPage;
