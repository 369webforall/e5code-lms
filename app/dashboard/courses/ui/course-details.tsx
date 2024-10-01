import React from "react";
import BunnyVideo from "./Bunny";
type Props = {
  id: string;
  courseslug: string;
  title: string;
  github: string;
  video: string;
};

const CourseDetails = ({ course }: { course: Props }) => {
  return (
    <>
      <div className="w-full h-full">
        <p className="my-2">{course.title}</p>
        <p className="my-2">
          <span className="font-semibold">Class Resource</span>{" "}
          <a
            className="border-b border-red-600"
            href={course.github}
            target="_blank"
          >
            Study Materials
          </a>
        </p>
        <BunnyVideo link={course.video} />
      </div>
    </>
  );
};

export default CourseDetails;
