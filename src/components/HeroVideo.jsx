import { useEffect, useRef } from "react";

// Change this if you name your file differently
const VIDEO = "/video/hero.mp4";

// The video is landscape, so on a tall phone screen the sides get cropped.
// This chooses which part stays visible.
// Try "left", "center", "right", or a percentage like "70%".
const FOCUS = "center";

function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iPhones need "muted" set directly for autoplay to be allowed
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <div className="absolute inset-0 bg-slate-900" aria-hidden="true">
      <video
        ref={videoRef}
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        style={{ objectPosition: FOCUS }}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default HeroVideo;
