'use client';

import { useEffect, useRef, useState } from 'react';
import { H2, H3, P } from '../../../styles/Typography';

const LifeCycleTech = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const logosRow1 = [
    "/Logo/logo1.svg",
    "/Logo/logo2.svg",
    "/Logo/logo3.svg",
    "/Logo/logo4.svg",
    "/Logo/logo5.svg",
    "/Logo/logo6.svg",
    "/Logo/logo7.svg",
    "/Logo/logo8.svg",
    "/Logo/logo9.svg",
    "/Logo/logo10.svg",
    "/Logo/logo11.svg",
    "/Logo/logo12.svg",
  ];
  // const logosRow2 = [
  //   "/Logo/logo7.svg",
  //   "/Logo/logo8.svg",
  //   "/Logo/logo9.svg",
  //   "/Logo/logo10.svg",
  //   "/Logo/logo11.svg",
  //   "/Logo/logo12.svg",
  // ];
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
      style={{
        // Purple top SOLID, white bottom TRANSPARENT
        background: 'linear-gradient(180deg, #5B21B6 0%, #6D28D9 50%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100%)',
        paddingBottom: '500px'
      }}
    >
      {/* Background Pattern - EXTENDED HEIGHT */}
      <div
        className="absolute w-full"
        style={{
          top: 200,
          left: 0,
          right: 0,
          // Extends 200px below the section
          height: 'calc(30% + 100px)', // Increases total height
          backgroundImage: "url('/LandingPageNew/LifeCycleBack.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          opacity: 0.52,
          zIndex: 1
        }}
      />

      <div className="relative z-10 max-w-8xl lg:mx-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* Header Section */}
        <div className="text-center max-w-6xl  mb-12 lg:mb-16">
          <H2
            className="transition-all text-[#F5F5F5] duration-700 ease-in-out mb-4"
            style={{

              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.1s'
            }}
          >
            Efficient Lifecycle Management and Modernization
          </H2>
          <p
            className="max-w-4xl mx-auto transition-all duration-700 ease-in-out"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              lineHeight: '150%',
              color: '#E5E5FF',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.3s'
            }}
          >
            Clients rely on Qnest Global to move from legacy systems to AI‑ready, cloud platforms with minimal disruption, aligning technology changes with daily work for both business and IT teams.
          </p>
        </div>

        {/* White Card Section */}
        <div
          className="bg-white  rounded-none shadow-2xl md:mx-20 max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-full p-8 lg:px-14 lg:py-28 transition-all duration-700 ease-in-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: '0.5s'
          }}
        >
          <H3>
            Partnerships That Power Real Results
          </H3>
          <section className="bg-white pt-10">
            {/* Logo Marquee Container */}
            <div className="relative mb-4 overflow-hidden w-full pt-10">
              {/* Row 1 */}
              <div className="flex gap-12 animate-marquee-inner">
                {[...logosRow1, ...logosRow1].map((logo, i) => (
                  <img
                    key={`row1-${i}`}
                    src={logo}
                    alt="Partner logo"
                    className="h-6 sm:h-8 lg:h-10 object-contain
                   grayscale hover:grayscale-0
                   transition duration-300"
                  />
                ))}
              </div>

              <div className="h-8" />

              {/* Row 2 */}
              {/* <div className="flex gap-12 animate-marquee-inner-reverse">
    {[...logosRow2, ...logosRow2].map((logo, i) => (
      <img
        key={`row2-${i}`}
        src={logo}
        alt="Partner logo"
        className="h-6 sm:h-8 lg:h-10 object-contain
                   grayscale hover:grayscale-0
                   transition duration-300"
      />
    ))}
  </div> */}

            </div>


            {/* Logos */}
            {/* <div className="flex flex-wrap items-center gap-x-8 gap-y-6 pb-10  ">
      {[
        "/Logo/logo1.svg",
        "/Logo/logo2.svg",
        "/Logo/logo3.svg",
        "/Logo/logo4.svg",
        "/Logo/logo5.svg",
        "/Logo/logo6.svg",
        "/Logo/logo7.svg",
        "/Logo/logo8.svg",
        "/Logo/logo9.svg",
        "/Logo/logo10.svg",
        "/Logo/logo11.svg",
        "/Logo/logo12.svg",
        "/Logo/logo13.svg",
       
 
      ].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="Partner logo"
          className="h-6 lg:h-8 object-contain  opacity-70  hover:opacity-100 transition"
        />
      ))}
    </div> */}
            {/* Two-column text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-40 gap-y-8">

              {/* Left column */}
              <div className="border-t border-[#858585] pt-6 lg:pt-0">
                <P className="lg:pt-10">
                  Qnest Global builds every partnership on trust, clarity, and shared goals.
                  Our team works closely with leading technology providers and enterprises,
                  combining proven platforms with tailored solutions that match each
                </P>
              </div>

              {/* Right column */}
              <div className="border-t border-[#858585] pt-6 lg:pt-0">
                <P className="lg:pt-10">
                  Working with leading platforms and enterprise clients, we combine proven
                  tools with practical delivery experience. This collaboration helps
                  organizations modernize safely, reduce risk, and keep their systems ready
                  for future change.
                </P>
              </div>

            </div>


          </section>

        </div>

      </div>
    </div>
  );
};

export default LifeCycleTech;