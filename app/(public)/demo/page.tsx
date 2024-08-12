import React from "react";
import Video from "./_components/Video";
import BunnyVideo from "./_components/BunnyVideo";
const Demo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl mb-4">MERN Stack Roadmap</h2>
        <BunnyVideo />
      </div>
      <div>
        <h2 className="text-xl mb-4">JavaScript Basic</h2>
        <Video id="lKFWC-OzZZ8" />
      </div>
    </div>
  );
};

export default Demo;
