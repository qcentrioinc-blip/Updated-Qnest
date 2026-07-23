import { useEffect, useRef, useState } from 'react';

const OnePoint = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="w-full bg-gradient-to-r from-black via-gray-900 to-purple-900 py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 min-h-auto sm:min-h-auto lg:min-h-auto xl:min-h-screen"
    >
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">

          {/* Left Side - Title */}
          <div className="pt-4 sm:pt-6 lg:pt-8">
            <h2
              className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] transition-all duration-700 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                lineHeight: '90%',
                letterSpacing: '-1px',
              }}
            >
              Duis aute iru <br /> dolor
            </h2>
          </div>

          {/* RIGHT SIDE - MOBILE / TABLET VERSION */}
          <div className="block lg:hidden mt-8 sm:mt-10">
            {/* Top circle */}
            <div className="flex items-center">
              <div 
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center transition-all duration-500 ease-in-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0)',
                  transitionDelay: '0.3s'
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
            </div>

            {/* Dotted line + content */}
            <div className="flex">
              {/* Line */}
              <div className="ml-[18px] mt-2 mb-4">
                <div
                  style={{
                    width: '2px',
                    height: isVisible ? '220px' : '0px',
                    background: `
                      repeating-linear-gradient(
                        to bottom,
                        #F99526 0px,
                        #8338EC 20px,
                        transparent 20px,
                        transparent 35px
                      )
                    `,
                    borderRadius: '999px',
                    transition: 'height 1000ms ease-in-out 0.8s, opacity 1000ms ease-in-out 0.8s',
                    opacity: isVisible ? 1 : 0
                  }}
                />
              </div>

              {/* Content */}
              <div className="ml-6 mt-4">
                <h3
                  className="text-white mb-3 text-xl sm:text-2xl transition-all duration-700 ease-in-out"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    lineHeight: '110%',
                    letterSpacing: '0%',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                    transitionDelay: '1.3s'
                  }}
                >
                  Duis aute iru dolor
                </h3>

                <p
                  className="text-gray-300 mb-6 text-sm sm:text-base transition-all duration-700 ease-in-out"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 400,
                    lineHeight: '150%',
                    letterSpacing: '0%',
                    color: '#F5F5F5',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                    transitionDelay: '1.5s'
                  }}
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  occaecat cupidatat non.
                </p>

                <a
                  href="/industries/high-tech/contactform"
                  className="bg-white text-black px-6 sm:px-7 py-3 rounded-lg hover:bg-gray-100 transition-all duration-700 ease-in-out flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center text-sm sm:text-[15px]"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 700,
                    fontStyle: 'bold',
                    letterSpacing: '0.5px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    transitionDelay: '1.7s'
                  }}
                >
                  BOOK A FREE DEMO
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-[18px] sm:h-[18px]"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom circle */}
            <div className="flex items-center mt-4">
              <div 
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center transition-all duration-500 ease-in-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0)',
                  transitionDelay: '1.8s'
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - DESKTOP VERSION */}
          <div className="relative pt-4 hidden lg:block">
            {/* First Circle Marker - Top (APPEARS AT TOP - 0.3s) */}
            <div className="relative">
              <div
                className="w-14 h-14 rounded-full border-2 border-white bg-transparent flex items-center justify-center absolute left-0"
                style={{
                  top: '0px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0)',
                  transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
                  transitionDelay: '0.3s'
                }}
              >
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>

              {/* Gradient Dotted Line (GROWS FROM TOP - 0.8s) */}
              <div
                className="absolute left-7"
                style={{
                  top: '56px',
                  width: '3px',
                  height: isVisible ? '455px' : '0px',
                  background: `
                    repeating-linear-gradient(
                      to bottom,
                      #F99526 0px,
                      #8338EC 20px,
                      transparent 20px,
                      transparent 35px
                    )
                  `,
                  borderRadius: '10px',
                  transition: 'height 1200ms ease-in-out, opacity 1200ms ease-in-out',
                  transitionDelay: '0.8s',
                  opacity: isVisible ? 1 : 0
                }}
              ></div>

              {/* Content - Right of Circle */}
              <div className="relative">
                <div className="ml-24 pt-4 absolute left-0 top-52">
                  <h3
                    className="text-white mb-5 transition-all duration-700 ease-in-out"
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      fontSize: '32px',
                      lineHeight: '110%',
                      letterSpacing: '0%',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                      transitionDelay: '1.4s'
                    }}
                  >
                    Duis aute iru dolor
                  </h3>

                  <p
                    className="text-gray-300 mb-8 transition-all duration-700 ease-in-out"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '130%',
                      letterSpacing: '0%',
                      color: '#F5F5F5',
                      maxWidth: '520px',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                      transitionDelay: '1.6s'
                    }}
                  >
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. occaecat cupidatat non.
                  </p>

                  {/* Button */}
                  <a
                    href="/industries/high-tech/contactform"
                    className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-700 ease-in-out flex items-center gap-3 w-fit"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 700,
                      fontStyle: 'bold',
                      fontSize: '16px',
                      letterSpacing: '0.5px',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                      transitionDelay: '1.8s'
                    }}
                  >
                    BOOK A FREE DEMO
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Second Circle Marker - Bottom (APPEARS AT BOTTOM - 2.0s) */}
            <div className="relative" style={{ marginTop: '495px' }}>
              <div
                className="w-14 h-14 rounded-full border-2 border-white bg-transparent flex items-center justify-center absolute left-0"
                style={{
                  top: '0px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0)',
                  transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
                  transitionDelay: '2.0s'
                }}
              >
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OnePoint;
