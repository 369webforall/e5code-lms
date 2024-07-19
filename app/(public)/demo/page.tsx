import React from "react";
import Video from "./_components/Video";

const Demo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl mb-4">MERN Stack Roadmap</h2>
        <Video id="EyFW-KejeT4" />
      </div>
      <div>
        <h2 className="text-xl mb-4">HTML Basic</h2>
        <Video id="CrFrQXEbxbc" />
      </div>
      <div>
        <h2 className="text-xl mb-4">CSS Basic</h2>
        <Video id="ncKMDNfmJRw" />
      </div>
      <div>
        <h2 className="text-xl mb-4">JavaScript Basic</h2>
        <Video id="lKFWC-OzZZ8" />
      </div>
    </div>
  );
};

export default Demo;
