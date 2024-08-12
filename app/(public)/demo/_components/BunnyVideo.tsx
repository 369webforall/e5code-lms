import React from "react";

const BunnyVideo = () => {
  return (
    <div className="relative pt-[56.25%]">
      <iframe
        src="https://iframe.mediadelivery.net/embed/285932/baf6b795-2614-495a-b097-6e73ec5204cd?autoplay=false&loop=false&muted=false&preload=false&responsive=true"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full border-0"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BunnyVideo;
