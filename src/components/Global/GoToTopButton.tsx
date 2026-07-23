import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const GoToTopButton = () => {
  const [, setShowLabel] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button immediately on mount for consistency, or add scroll listener if desired
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById("landingpage");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // If not visible, render nothing or hidden class
  // using opacity/scale for transition
  const baseClasses = `
    fixed 
    bottom-20 sm:bottom-24 
    right-4 sm:right-8 
    z-[10000]
    flex items-center
    transition-all duration-300 ease-out
    ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-85 translate-y-4 pointer-events-none'}
  `;

  return (
    <div
      className={baseClasses}
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
    >
      {/* Hover Label */}
      {/* <div className={`
          mr-3
          px-4 py-1.5
          rounded-full
          text-xs font-semibold
          text-white
          backdrop-blur-xl
          bg-black/60
          border border-white/20
          shadow-lg
          whitespace-nowrap
          transition-all duration-300 origin-right
          ${showLabel && isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95'}
      `}>
        Go to top
      </div> */}

      {/* Button */}
      <button
        onClick={handleClick}
        aria-label="Go to top"
        className={`
          relative
          w-12 h-12 sm:w-14 sm:h-14
          rounded-full
          flex items-center justify-center

          /* GLASS BASE */
          backdrop-blur-xl
          bg-black/40

          /* DOUBLE BORDER */
          border border-white/30
          ring-1 ring-black/20

          /* PREMIUM SHADOW */
          shadow-[0_12px_35px_rgba(0,0,0,0.45)]

          hover:bg-black/55
          hover:scale-105 hover:-translate-y-0.5
          active:scale-95
          transition-all duration-300
        `}
      >
        <ArrowUp
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          strokeWidth={2.5}
        />

        {/* Subtle inner glow */}
        <span className="
          absolute inset-0
          rounded-full
          bg-gradient-to-br from-white/20 to-transparent
          pointer-events-none
        " />
      </button>
    </div>
  );
};

export default GoToTopButton;
