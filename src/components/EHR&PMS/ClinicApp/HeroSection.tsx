import { useState, useEffect, useRef } from 'react';
import { H1, P } from '../../../styles/Typography';
import Image1 from '/ClinicApp/Phone.png';
import { ContactUs } from '../../../styles/Button';
import ContactDrawer from '../Navbar/ContactDrawer';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pageOpened, setPageOpened] = useState(false);
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // ✅ Type the refs properly
  const contentRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  // ✅ Intersection Observer for content slide animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3, rootMargin: '0px' }
    );

    const content = contentRef.current;
    if (content) observer.observe(content);

    return () => {
      if (content) observer.unobserve(content);
    };
  }, []);

 
  useEffect(() => {
    const timer = setTimeout(() => setPageOpened(true), 100);
    return () => clearTimeout(timer);
  }, []);

 
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    // Explicitly type event as MouseEvent (not React.MouseEvent)
    // const handleMouseMove = (e: MouseEvent) => {
    //   const rect = heroElement.getBoundingClientRect();
    //   setCursorPosition({
    //     x: e.clientX - rect.left,
    //     y: e.clientY - rect.top,
    //   });
    // };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // heroElement.addEventListener('mousemove', handleMouseMove);
    heroElement.addEventListener('mouseenter', handleMouseEnter);
    heroElement.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      // heroElement.removeEventListener('mousemove', handleMouseMove);
      heroElement.removeEventListener('mouseenter', handleMouseEnter);
      heroElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Page Opening Overlay */}
      <div
        className="fixed inset-0 z-50 flex justify-center items-center overflow-hidden pointer-events-none"
        style={{
          clipPath: pageOpened
            ? 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          transition: 'clip-path 1.2s cubic-bezier(0.77, 0, 0.175, 1)',
          background: 'linear-gradient(135deg, #166D48 0%, #28B87B 100%)',
        }}
      >

        <h1
          className="text-8xl font-quadran   text-white flex items-center gap-4 transition-all duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
          style={{
            transform: pageOpened ? 'translateX(-100%)' : 'translateX(0)',
            opacity: pageOpened ? 0 : 1,
          }}
        >
          <span className="text-8xl font-quadran   font-light">|</span> QNEST
        </h1>
      </div>


      <div
        className="w-full   overflow-hidden relative"
        ref={heroRef}
        style={{ cursor: isHovering ? 'none' : 'default' }}
      >
        {/* ✅ Custom Cursor Zoom Effect */}
        {/* {isHovering && (
          <div
            className="fixed pointer-events-none z-40 rounded-full border-2 border-green-800 transition-all duration-150 ease-out"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              width: '100px',
              height: '100px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(22, 109, 72, 0.1)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <div className="absolute inset-0 rounded-full border border-green-400 opacity-50 animate-ping" />
          </div>
        )} */}


        <div
          className="md:h-[100vh] h-[65vh] gap-4 flex flex-col md:pt-24 pt-12    relative"
          style={{
            backgroundImage: 'url("/ClinicApp/ClinicBackground.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: pageOpened ? 1 : 0,
            transform: pageOpened ? 'scale(1.05)' : 'scale(0.95)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s',
          }}
        >
          <div className="flex  xl:flex-row  flex-col justify-between  xl:items-center px-6 lg:mx-10 md:px-14  gap-4 md:gap-10 lg:gap-8 mt-10 sm:mt-10 lg:mt-20">

            {/* LEFT — Heading */}
            <H1 className="font-thin  text-center  lg:text-left text-[#166D48] leading-tight">
              Sed ut perspicia tisunde  <br className='md:block hidden' />Seduo ut perspiciatis
            </H1>


            {/* RIGHT — Paragraph + Button */}
            <div className="flex   flex-col   items-center lg:items-start max-w-[360px]  md:max-w-[550px] xl:max-w-[410px] space-y-4 md:space-y-6 lg:space-y-4">
              <P className="text-black text-center lg:text-left leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in
              </P>

              <ContactUs
                onClick={(e) => {
                  e.preventDefault(); 
                  setDrawerOpen(true);
                }}
              >GET PRODUCT DEMO</ContactUs>
            </div>

          </div>

          {/* TRIANGLE BACKGROUND DECORATIONS */}
          <div className="hidden lg:block absolute  inset-0 overflow-x-hidden -z-10">

            {/* LEFT TRIANGLE IMAGE */}
            <img
              src="/ClinicApp/FromLeft.png"
              alt=""
              className="fixed left-0  w-[350px] top-[60%]    object-cover"
            />

            {/* RIGHT TRIANGLE IMAGE */}
            <img
              src="/ClinicApp/FromRight.png"
              alt=""
              className=" fixed right-0  w-[400px] top-[60%]  "
            />

          </div>


          {/* ✅ Image */}
          <div className="absolute   top-[55%] md:top-[58%] left-1/2 -translate-x-1/2 w-full md:max-w-4xl px-6 md:px-10 lg:px-4">
            <img
              src={Image1}
              alt="Laptop application interface"
              className="w-full h-auto lg:scale-110  object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* ✅ White Section with Content */}
        <div
          className="bg-white py-12    sm:py-16 md:py-20 xl:pt-80 lg:pb-40"
          ref={contentRef}
        >
          <div className="max-w-8xl lg:mx-10 lg:mt-28 mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start px-4  ">
              {/* Left Heading */}
              <div
                className="space-y-4 transition-all duration-1000 ease-out"
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <h2
                  className="text-3xl mt-10 md:mt-0 font-quadran   md:text-4xl lg:text-5xl leading-tight"
                  style={{
                    background: 'linear-gradient(90deg, #28B87B 0%, #F99526 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Sed ut perspicia tisunde <br />Seduo ut perspiciatis
                </h2>
              </div>

              {/* Right Paragraph */}
              <div
                className="space-y-4 transition-all duration-1000 ease-out"
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: '300ms',
                }}
              >
                <P className="text-black xl:pt-20 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                </P>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default HeroSection;
