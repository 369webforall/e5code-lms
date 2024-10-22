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
            className="text-orange-600 font-medium text-lg hover:border-b"
          >
            MERN Stack Roadmap & Syllabus
          </a>
        </div>
      </div>
      {/* html */}
      <div>
        <h2 className="text-xl mb-4">HTML Basic - Class 1</h2>
        <div className="relative pt-[56.25%]">
          <iframe
            src="https://iframe.mediadelivery.net/embed/285932/94fe07de-0b70-4ae5-960e-0d85e1b5de33?autoplay=false&loop=false&muted=false&preload=false&responsive=true"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4">
          <a
            href="https://abrasive-beetle-e95.notion.site/C1-HTML-12066335ef9f80558245ecfdf1d78d8e"
            target="_blank"
            className="text-orange-600 font-medium text-lg hover:border-b"
          >
            HTML Basic - Document
          </a>
        </div>
      </div>
    </div>
  );
};

export default Demo;
