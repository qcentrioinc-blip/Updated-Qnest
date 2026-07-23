'use client';

import { useEffect, useRef, useState } from 'react';
import { H2 } from '../../../styles/Typography';

const CEO = () => {
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
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full opacity-95"
        style={{
          backgroundImage: "url('/Global-Landing-Page/House1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32 xl:min-h-screen flex items-center">
        <div className="max-w-[1000px] ">
          
          {/* Main Heading */}
          <H2 
            className="lg:mb-60 transition-all duration-700  ease-in-out text-[#8338EC] mt-45 lg:mt-0"
            style={{
              
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#8338EC',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '0.2s'
            }}
          >
            Qnest Global delivers reliable, AI‑driven, cloud‑ready systems tailored to each client’s industry, goals, and teams. 
          </H2  >

          {/* Author Info */}
          {/* <div
            className="transition-all duration-700 ease-in-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.5s'
            }}
          > */}
            {/* RAO */}
            {/* <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(24px, 2.5vw, 32px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
                marginBottom: '8px'
              }}
            >
              RAO
            </h2> */}
            
            {/* CEO and Founder QNEST */}
            {/* <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.3vw, 18px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000'
              }}
            >
              CEO and Founder QNEST
            </p>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default CEO;
