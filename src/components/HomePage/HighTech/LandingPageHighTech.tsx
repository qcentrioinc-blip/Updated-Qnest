// import { Link } from "react-router-dom";

import { useEffect, useRef } from "react";
import LazyVideo from "../../Global/LazyVideo";

const LandingPageHighTech = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // start muted for autoplay
    videoEl.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting && entry.intersectionRatio >= 0.3;

          if (!visible) {
            // section out of view -> pause and mute
            videoEl.pause();
            videoEl.muted = true;
          } else {
            // section back in view -> play
            videoEl.play().catch(() => { });
          }
        });
      },
      {
        threshold: [0, 0.3, 0.6, 1],
      }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full bg-black py-8 sm:py-0 lg:py-0">
      <LazyVideo
        ref={videoRef}
        className="w-full h-auto max-h-screen object-cover"
        src="/HighTech/HighTechVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        Your browser does not support the video tag.
      </LazyVideo>
    </div>
  );
};

export default LandingPageHighTech;
