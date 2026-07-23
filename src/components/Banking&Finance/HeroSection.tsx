import { useRef, useEffect, useState } from "react";
 
 
const WORDS = [
  "banks",
  "credit\u2011unions",
  "financial\u2011institutions"
];
 
const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
 
  useEffect(() => {
    const currentWord = WORDS[wordIndex];
 
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(pauseTimer);
    }
 
    const typingSpeed = isDeleting ? 80 : 120;
 
    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentWord) {
          setIsPaused(true);
        }
      } else {
        const next = displayText.slice(0, -1);
        setDisplayText(next);
        if (next === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      }
    }, typingSpeed);
 
    return () => clearTimeout(timer);
  }, [displayText, wordIndex, isDeleting, isPaused]);
 
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
 
    videoEl.muted = true;
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting && entry.intersectionRatio >= 0.3;
          if (!visible) {
            videoEl.pause();
            videoEl.muted = true;
          } else {
            videoEl.play().catch(() => { });
          }
        });
      },
      { threshold: [0, 0.3, 0.6, 1] }
    );
 
    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);
 
  return (
    <div className="relative w-full  h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-screen bg-[#0b1f3a]"> {/* Fallback background — fixed height prevents layout shift */}
 
      {/* Video — absolutely positioned to fill container */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/Video/HeroFinal.mp4"
        autoPlay
        muted
        loop
        playsInline
  webkit-playsinline="true"
        preload="auto"
        controls={false}
      >
        Your browser does not support the video tag.
      </video>
 
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/50 pointer-events-none" />
 
      {/* Content */}
      <div className="absolute left-4 md:left-14 lg:left-12 xl:left-28 top-1/2 xl:top-72 overflow-hidden text-left">
        <h1 className="text-white font-quadran   text-[20px] md:text-[32px] lg:text-[56px] xl:text-[74px]">
          Enterprise AI-enabled platforms{" "}
          <br className="md:block hidden" />
 
          <span className="inline-flex items-center gap-1 xl:gap-3">
            transforming
            <span className="text-blue-300">
              {displayText}
            </span>
            <span className="inline-block w-[4px] h-[1em] bg-blue-400 animate-pulse align-middle" />
          </span>
        </h1>
      </div>
    </div>
  );
};
 
export default HeroSection;