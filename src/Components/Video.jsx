import React from "react";
import video from "../assets/Video1.mp4";
function Video() {
  return (
    <div className="d-flex justify-content-center section_space ">
      <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
