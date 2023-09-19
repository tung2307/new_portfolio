import { useState, useEffect } from "react";

function VideoComponent() {
  const [currentSource, setCurrentSource] = useState(0);
  const videoSources = [
    "/pexels-kehn-hermano-6657004 (1080p).mp4",
    "/pexels-kindel-media-9701886 (1080p).mp4",
    "/production_id 4566143 (1080p).mp4",
    "/pexels-kindel-media-9699686 (1080p).mp4",
    "/pexels-kindel-media-8995969 (2160p).mp4",

    // ...add more sources as needed
  ];

  const handleVideoEnd = () => {
    setCurrentSource((prevSource) => (prevSource + 1) % videoSources.length);
  };

  useEffect(() => {
    const video = document.getElementById("myVideo") as HTMLVideoElement;
    if (video) {
      video.playbackRate = 3.0;
    }
  }, [currentSource]);

  return (
    <div>
      <video
        id="myVideo"
        style={{ width: "100vw", height: "80vh", objectFit: "cover" }}
        src={videoSources[currentSource]}
        onEnded={handleVideoEnd}
        autoPlay
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;
