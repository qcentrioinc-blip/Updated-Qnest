import React, { useState, useRef, useEffect } from 'react';
import { useScroll } from "framer-motion";
import { H2, P } from '../../../styles/Typography';

interface TabContent {
  headline: string;
  paragraph: string;
  image: string;
}

const tabContents: TabContent[] = [
  {
    headline: 'Lorem ipsum dolor ,consect adipis ipsum',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ProductDetails(COS)/img4.png',
  },
  {
    headline: 'Praesent commodo ,cursus magn consectetur',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ProductDetails(COS)/img5.jpg',
  },
  {
    headline: 'Curabitur blandit ,tempus porttitor',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ProductDetails(COS)/img6.jpg',
  },
  {
    headline: 'Integer posuere ,erat a ante venenatis',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ProductDetails(COS)/img4.png',
  },
  {
    headline: 'Etiam porta sem ,malesuada magna',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ProductDetails(COS)/img5.jpg',
  },
];

const ResponsiveTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const numItems = tabContents.length;
      const index = Math.min(Math.floor(latest * numItems), numItems - 1);
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  const handleNavClick = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerTop = container.offsetTop;
    const scrollableDistance = container.offsetHeight - window.innerHeight;

    // smooth snapping calculation
    const targetScroll = containerTop + (index / tabContents.length) * scrollableDistance + 10;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = activeIndex === 0 ? tabContents.length - 1 : activeIndex - 1;
      handleNavClick(prev);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = activeIndex === tabContents.length - 1 ? 0 : activeIndex + 1;
      handleNavClick(next);
    }
  };

  return (
    <section ref={containerRef} className="bg-white h-[200vh]">
      <div className="sticky top-24 w-full py-10 overflow-hidden px-4 md:px-8">
        <div className='max-w-7xl mx-auto'>
          {/* Tabs Navigation */}
          <div className="md:w-1/2 mt-10">
            <nav aria-label="Product features" className="mb-10">
              <ul
                role="tablist"
                className="flex justify-between gap-6 md:gap-10 border-b border-gray-700 pb-2 overflow-x-auto scrollbar-hide"
                tabIndex={0}
                onKeyDown={handleKeyDown}
              >
                {tabContents.map((_, index) => (
                  <li
                    key={index}
                    role="tab"
                    aria-selected={activeIndex === index}
                    tabIndex={0}
                    aria-controls={`tab-panel-${index}`}
                    id={`tab-${index}`}
                    onClick={() => handleNavClick(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleNavClick(index);
                      }
                    }}
                    className={`cursor-pointer text-3xl md:text-3xl xl:text-5xl transition-colors duration-200 shrink-0
                      ${activeIndex === index
                        ? 'text-black font-semibold'
                        : 'text-gray-400 hover:text-gray-600 font-normal'}`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 relative">

            {/* Text Content */}
            <div className="md:w-1/2 z-10 mb-20 md:mb-0">
              <H2 className="text-3xl text-black font-bold whitespace-pre-line mb-6 leading-tight transition-opacity duration-300">
                {tabContents[activeIndex].headline}
              </H2>
              <P className="text-gray-700 leading-relaxed transition-opacity duration-300">
                {tabContents[activeIndex].paragraph}
              </P>
            </div>

            {/* Image + Shape */}
            <div className="md:w-1/2 flex justify-center relative">
              {/* Main image */}
              <img
                src={tabContents[activeIndex].image}
                alt={`Product feature ${activeIndex + 1}`}
                className="
                  relative z-10 
                  w-[85%] 
                  sm:w-[80%] 
                  md:w-[85%] 
                  lg:w-[85%]
                  h-auto 
                  rounded-md 
                  shadow-sm
                  transition-opacity duration-300
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResponsiveTabs;
