import { useEffect } from "react";

function VideoComponent() {
  const videoSources = [
    "https://utfs.io/f/7295e7c0-6afa-49e1-a9c3-b85f6874cc68-y0l7zw.mp4",

    // ...add more sources as needed
  ];

  useEffect(() => {
    const video = document.getElementById("myVideo") as HTMLVideoElement;
    if (video) {
      video.playbackRate = 2.0;
    }
  }, []);

  return (
    <div>
      <video
        id="myVideo"
        style={{ width: "100vw", height: "80vh", objectFit: "cover" }}
        src={videoSources[0]}
        loop
        autoPlay
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;
