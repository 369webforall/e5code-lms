import React from "react";
import Video from "./_components/Video";
import BunnyVideo from "./_components/BunnyVideo";
const Demo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl mb-4">MERN Stack Roadmap</h2>
        <BunnyVideo />

        <div className="mt-4">
          <a
            href="https://abrasive-beetle-e95.notion.site/MERN-STACK-ROAD-MAP-12466335ef9f800db261e7f28a0e2439"
            target="_blank"
            className="text-orange-600 font-medium text-lg"
          >
            MERN Stack Roadmap & Syllabus
          </a>
        </div>
      </div>
    </div>
  );
};

export default Demo;
