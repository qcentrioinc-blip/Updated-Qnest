import { useEffect, useRef, useState } from 'react';
import { H1, H2, P } from '../../../styles/Typography';
import { ContactUs } from '../../../styles/Button';
import { Link } from 'react-router-dom';
import { TrendingUp } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const animatedRef = useRef<HTMLDivElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(
  typeof window !== "undefined" ? window.innerWidth < 1220 : false
);

  // const yellowGradientStyle = {
  //   background: 'linear-gradient(90deg, rgba(255, 215, 0, 0.4) -16.96%, rgba(255, 215, 0, 0.2) 51.92%)',
  // };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1220);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        } else {
          setHasEntered(false);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
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

  useEffect(() => {
    const blueBox = animatedRef.current;
    if (blueBox) {
      if (hasEntered) {
        blueBox.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        if (isMobile) {
          blueBox.style.transform = 'translateX(0)';
        } else {
          blueBox.style.transform = 'translateY(0)';
        }
        blueBox.style.opacity = '1';

        const cleanupTimer = setTimeout(() => {
          blueBox.style.transition = '';
        }, 1000);

        return () => clearTimeout(cleanupTimer);
      } else {
        blueBox.style.transition = 'none';
        if (isMobile) {
          blueBox.style.transform = 'translateX(-100%)';
        } else {
          blueBox.style.transform = 'translateY(-100%)';
        }
        blueBox.style.opacity = '0';
      }
    }
  }, [hasEntered, isMobile]);

  return (
    <section
  ref={sectionRef}
  className="  
    w-full relative overflow-hidden flex items-start lg:items-start xl:items-center
    min-h-[1030px] 
    md:min-h-[1050px] 
    lg:min-h-[1200px]
    xl:min-h-[730px]
     bg-white dark:bg-gradient-t-o-r dark:from-black dark:to-black
  "
  // style={yellowGradientStyle}
>

      {/* Shape - Desktop Only */}
      {!isMobile && (
        <div
          className="absolute hidden md:block z-0"
          style={{
  width: '800px',
  height: '820px',
  top: '180px',
  left: '-100px',
            transform: 'rotate(-168.69deg)',
            opacity: 1,
            borderRadius: '600px',
            overflow: 'hidden'
          }}
        >
          {/* <img
            src="/ProductPage9/shape.png"
            alt="Decorative shape"
            className="w-full h-full object-cover"
          /> */}
        </div>
      )}

      {/* Blue/Orange Animated Background Container */}
      <div
        ref={animatedRef}
        className="absolute shadow-2xl overflow-hidden"
        style={{
          background: '#00AA72',
          ...(isMobile ? {
  bottom: '0',
  left: '0',
  height: '40%',
  width: '85%',

            borderRadius: '0 9999px 9999px 0',
            borderBottom: '24px solid #000000',
          } : {
            bottom: '8px',
            top: '0',
            right: '80px',
            height: '95%',
            width: '32%',
            borderRadius: '0 0 9999px 9999px',
            borderLeft: '24px solid #000000',
          })
        }}
      >
        {/* Digital Grid Animation */}
        <div className={`absolute inset-0 z-5 transition-all duration-800 ease-out ${hasEntered ? 'opacity-100' : 'opacity-0'
          }`} style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '20px 20px',
            animation: hasEntered ? 'gridPulse 2s ease-in-out' : 'none',
          }} />

        {/* Grid Sweep Animation (Left to Right) - Mobile Only */}
        {isMobile && (
          <div
            className={`absolute inset-0 z-6 transition-opacity duration-500 ${hasEntered ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.6) 0%, transparent 30%)',
              backgroundSize: '300% 100%',
              animation: hasEntered ? 'gridSweepLTR 1.5s ease-out' : 'none',
              animationDelay: '0.3s',
            }}
          />
        )}

        {/* Main Image with Futuristic Animation */}
        <video
  src="/ProductDetails4/kyc_video.mp4"
  autoPlay
  loop
  muted
  playsInline
  className={`absolute inset-0 w-full h-full object-cover z-10
    ${hasEntered ? 'opacity-100 scale-105' : 'opacity-0 scale-95'}`}
  style={{
    transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
    transitionDelay: hasEntered ? '0.6s' : '0s',
  }}
/>

        {/* Holographic Overlay Effect */}
        {/* <div className={`absolute inset-0 z-15 transition-all duration-1000 ease-out ${hasEntered ? 'opacity-30' : 'opacity-0'
          }`} style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: hasEntered ? 'hologramShift 3s ease-in-out infinite' : 'none',
          }} /> */}

        {/* Data Stream Lines */}
        {/* <div className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 ${hasEntered ? 'opacity-0' : 'opacity-100'
          }`} style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: hasEntered ? 'none' : 'dataStream 1.5s ease-in-out infinite',
          }} /> */}

        {/* Data Scan Light Bar */}
        {/* <div
          className={`absolute inset-0 z-25 transition-transform duration-500 ease-in-out pointer-events-none`}
          style={{
            transform: hasEntered ? 'translateY(100%)' : 'translateY(-100%)',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)',
            transitionDelay: hasEntered ? '1.1s' : '0s',
            height: '200%',
          }}
        /> */}

        <style>{`
          @keyframes gridPulse {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.1); opacity: 0.8; }
            100% { transform: scale(1); opacity: 0.4; }
          }
          @keyframes hologramShift {
            0%, 100% { background-position: -100% -100%; }
            50% { background-position: 200% 200%; }
          }
          @keyframes dataStream {
            0% { background-position: -200% 0%; }
            100% { background-position: 200% 0%; }
          }
          @keyframes gridSweepLTR {
            0% { background-position: -300% 0%; }
            100% { background-position: 100% 0%; }
          }
        `}</style>
      </div>

      {/* Main Content Container (Text + Button) */}
      <div
        className="relative z-10 w-full flex flex-col px-4 sm:px-8 py-14 xl:py-10 top-10 lg:top-20 xl:top-0"
        style={{
          ...(isMobile ? {} : {
            alignItems: 'flex-start',
            marginLeft: '60px',
            paddingRight: '128px',
          })
        }}
      >

        <div
          className="w-full flex flex-col justify-between text-gray-900"
          style={{
            ...(isMobile ? {
              alignItems: 'center',
              textAlign: 'center',
            } : {
              alignItems: 'flex-start',
              textAlign: 'left',
              marginTop: '80px',
            })
          }}
        >
          <H1 className="xl:py-6 max-w-2xl text-[#000000]">
            Enterprise Digital CIP and  CDD Automation Platform
          </H1>
          <P className="mb-8 font-quicksand max-w-[700px]">
            Fully configurable due diligence platform that automates customer onboarding, periodic reviews, and trigger events while ensuring regulatory compliance across client segments. Replace manual, document-based processes with system-configured policies, automated risk assessment, and seamless screening integrations.       </P>
          <Link
            to="/marketplace"
            
          >
            <ContactUs>Explore Diligent </ContactUs>
          </Link>

          {/* ================= STATS SECTION ================= */}
<div className="mt-16 w-full max-w-xl">
  <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-16 text-[#00AA72]">

    {/* Stat 1 */}
    <div className="flex flex-col items-center lg:items-start">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-12 h-12" />
        <H2 className="">
          70%
        </H2>
      </div>
      <P className="mt-2 text-center  max-w-[140px] sm:max-w-[180px]">
       Faster turnaround time for periodic reviews 
      </P>
    </div>

    {/* Divider */}
    <div className="h-12 sm:h-16 w-px bg-[#00AA72] opacity-40"></div>

    {/* Stat 2 */}
    <div className="flex flex-col items-center lg:items-start">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-12 h-12" />
        <H2>
          50+ 
        </H2>
      </div>
      <P className="mt-2 text-center max-w-[140px] sm:max-w-[180px]">
       Configurable risk parameters for accurate profiling
      </P>
    </div>

  </div>
</div>
{/* ================= END STATS ================= */}
        </div>
      </div>
    </section>
  );
}