import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";

const Video = ({ id }: { id: string }) => {
  return (
    <YouTubeEmbed videoid={id} height={600} width={600} params="controls=0" />
  );
};

export default Video;
