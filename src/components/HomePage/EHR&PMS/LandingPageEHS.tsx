import { useRef, useEffect } from "react";

const LandingPageEHS = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  //   if (!videoRef.current) return;

  //   const nextMuted = !userMuted;
  //   videoRef.current.muted = nextMuted;
  //   if (!nextMuted) {
  //     videoRef.current.volume = 1;
  //   }
  //   setUserMuted(nextMuted);
  // };

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
    <div className="w-full">
      <video
        ref={videoRef}
        className="w-full h-auto max-h-screen object-cover"
        src="/Video/EHRVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LandingPageEHS;