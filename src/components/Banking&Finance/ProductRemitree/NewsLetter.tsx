import { useState, useEffect, useRef } from "react";

const NewsLetter = () => {
  const [activeSteps, setActiveSteps] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref for the scrollable container

  const items = [
    { label: "Configure", icon: "/BuiltForBnf/cube.svg" },
    { label: "Assess", icon: "/BuiltForBnf/access-control.svg" },
    { label: "Decide", icon: "/BuiltForBnf/quiz-alt.svg" },
    { label: "Implement", icon: "/BuiltForBnf/master-plan.svg" },
    { label: "Review", icon: "/BuiltForBnf/quality.svg" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    const sequence = setInterval(() => {
      setActiveSteps((prev) => (prev < items.length - 1 ? prev + 1 : items.length - 1));
    }, 800);

    return () => clearInterval(sequence);
  }, [startAnimation, items.length]);

  useEffect(() => {
    if (!startAnimation) return;

    if (activeSteps > 0) {
      const timer = setTimeout(() => {
        setLineProgress(activeSteps);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [activeSteps, startAnimation]);

  // Auto-scroll to the active step on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // The flex container is the first child of the scroll container
      const flexContainer = container.children[0] as HTMLElement;
      
      if (flexContainer && flexContainer.children[activeSteps]) {
        const activeItem = flexContainer.children[activeSteps] as HTMLElement;
        
        // Calculate the position to center the active item
        const itemLeft = activeItem.offsetLeft;
        const itemWidth = activeItem.offsetWidth;
        const containerWidth = container.offsetWidth;
        
        const scrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);

        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSteps]);

  return (
    <div
      ref={sectionRef}
      className=" w-full flex flex-col items-center dark:bg-black justify-center bg-[#F2F7FF] py-6 px-4 md:px-8 overflow-hidden"
    >
      <h1 className="w-full max-w-7xl mx-auto font-['Bricolage_Grotesque',_sans-serif] font-semibold text-3xl md:text-5xl leading-tight text-center mb-16 md:mb-24">
        <span className="text-[#00AA72]">How Diligent automates</span>
        <br />
        
        <span className="text-[#141414] dark:text-white">
          due diligence from start to finish
        </span>
      </h1>

      {/* Added ref={scrollContainerRef} here */}
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto hide-scrollbar px-4 pb-4"
      >
        <div className="relative min-w-[600px] md:min-w-0 md:w-full max-w-7xl mx-auto flex items-start justify-between">
          {/* Background Line */}
          <div className="absolute top-[102px] md:top-[150px] left-10 md:left-[60px] right-10 md:right-[60px] h-[2px] bg-gray-200 z-0">
            {/* Animated Progress Line */}
            <div
              className="h-full bg-[#00AA72] transition-all duration-700 ease-out"
              style={{
                width: `${(lineProgress / (items.length - 1)) * 100}%`
              }}
            />
          </div>

          {/* Steps */}
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-start z-10 relative">
              {/* Circle Container */}
              <div className="relative flex flex-col items-center">
                {/* Large Grey Circle */}
                <div className="w-20 h-20 md:w-[120px] md:h-[120px] bg-white  dark:bg-slate-950 rounded-full mb-4 md:mb-6 overflow-hidden flex items-center justify-center p-4 md:p-7 border-[2px] border-[#D9D9D9] transition-transform  duration-300">
                  <img src={item.icon} alt={item.label} className="w-10 h-10 object-contain drop-shadow-sm opacity-80" />
                </div>

                {/* Blue Dot */}
                <div className="w-3 h-3 bg-[#00AA72] rounded-full" />
              </div>

              {/* Text */}
              <p className="mt-4 font-['quicksand',_sans-serif] dark:text-white font-bold text-lg md:text-2xl text-black text-center whitespace-nowrap">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default NewsLetter;