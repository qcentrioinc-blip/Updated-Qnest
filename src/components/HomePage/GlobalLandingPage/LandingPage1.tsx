import React, { useState, useEffect, useRef } from 'react';

const ArrowUpRight = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);
const Clock = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
import { motion, AnimatePresence } from 'framer-motion';
import { H1, P } from '../../../styles/Typography';
import { Link } from 'react-router-dom';
import Navbar from '../../Global/Navbar/Navbar';



interface IndustryCardProps {
  title: string;
  image: string;
  isActive: boolean;
  isReady: boolean;
  isMobile: boolean;
  onClick: () => void;
  url: string;
  onComingSoonClick: (title: string) => void;
  onNavigate?: (url: string) => Window | null;
  onPrefetch?: () => void;
  countdownText: string | null;
}

const IndustryCard = React.forwardRef<HTMLDivElement, IndustryCardProps>(
  ({ title, image, isReady, isMobile, onClick, url, onComingSoonClick, onNavigate, onPrefetch, countdownText, isActive }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const hasPrefetched = useRef(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (isReady && onPrefetch && !hasPrefetched.current) {
        hasPrefetched.current = true;
        onPrefetch();
      }
    };

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (!isReady) {
        onComingSoonClick(title);
      } else {
        if (onPrefetch && !hasPrefetched.current) {
          hasPrefetched.current = true;
          onPrefetch();
        }
        if (onNavigate) {
          onNavigate(url);
        } else {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      }
    };

    const showComingSoonText = !isReady && (isHovered || isMobile);

    return (
      <motion.div
        ref={ref}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        className="relative cursor-pointer group shrink-0 xl:w-full flex flex-col"
        initial={false}
        animate={{
          opacity: isReady ? 1 : (isHovered || isMobile ? 1 : 0.6),
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div
          onClick={handleClick}
          className={`block relative overflow-hidden rounded-xl transition-all duration-700 cursor-pointer ${isActive ? 'ring-2 ring-white/50 ring-offset-2 ring-offset-black' : ''
            }`}
          style={{ height: '140px', width: '260px' }}
        >
          {/* Image */}
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-1000 ${isReady
              ? 'brightness-100 group-hover:brightness-110'
              : 'brightness-75'
              } ${isHovered ? 'scale-110' : 'scale-100'}`}
          />

          {/* Overlay */}
          <div className={`absolute inset-0 flex flex-col justify-between p-4 transition-all duration-500 z-10 ${isReady
            ? 'bg-transparent'
            : showComingSoonText
              ? 'bg-black/75'
              : 'bg-black/20'
            }`}>

            {/* 1. CENTER: Countdown Timer */}
            {showComingSoonText && countdownText && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 text-center px-6">
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 font-quicksand">
                    Launching in
                  </div>
                  <div className="text-xl md:text-2xl font-bold font-quadran   uppercase tracking-wider text-white drop-shadow-md whitespace-nowrap">
                    {countdownText}
                  </div>
                </div>
              </div>
            )}

            {/* 2. BOTTOM: Title & Icon */}
            <div className="relative z-20 w-full mt-auto">
              <div className="flex justify-between items-center w-full">
                <span className={`font-semibold text-base lg:text-base tracking-wider transition-all ${isReady
                  ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                  : 'text-white'
                  }`}>
                  {title}
                </span>

                <div className={`p-1.5 rounded-full backdrop-blur-md transition-all duration-300 ${isReady
                  ? 'bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)] text-white'
                  : 'bg-white/10 text-white'
                  }`}>
                  {isReady ? (
                    <ArrowUpRight size={16} className="drop-shadow-sm" />
                  ) : (
                    <Clock size={16} className="drop-shadow-sm" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Border (Hover state) */}
          {isReady && isHovered && (
            <div
              className="absolute inset-0 border-2 border-white/70 rounded-xl z-30 pointer-events-none"
            />
          )}
        </div>
      </motion.div>
    )
  }
);

const Toast = ({ message, isVisible }: { message: string, isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="bg-[#1a1a1a] border border-white/20 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">
            <Clock size={18} className="text-gray-400" />
            <span className="text-sm font-medium tracking-wide">
              {message} <span className="text-gray-400 font-normal">- Coming Soon</span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function InteractiveHeroSection() {
  // const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [toast, setToast] = useState<{ show: boolean, message: string }>({ show: false, message: '' });
  const [isMobile, setIsMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState(Date.now());

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroVisible = useRef(true);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const industries = [
    { title: 'Cloud Finops AI', image: '/Global-Landing-Page/AI.webp', url: '/industries/cloud-finops-ai', isReady: true, deadline: null },
    { title: 'EHR and PMS', image: '/Global-Landing-Page/EHR.webp', url: '/industries/ehr-and-pms', isReady: true, deadline: '2026-02-06' },
    { title: 'Banking and Finance', image: '/Global-Landing-Page/BNF.webp', url: '/industries/banking-and-finance', isReady: true, deadline: '2026-02-20' },
    { title: 'High Tech', image: '/Global-Landing-Page/HighTech.webp', url: '/industries/high-tech', isReady: false, deadline: '2026-03-06' }
  ];

  // Helper to calculate countdown string (D H M)
  const getCountdown = (deadline: string | null) => {
    if (!deadline) return null;
    const total = Date.parse(deadline) - currentTime;
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);

    if (total <= 0) return "0d 0h 0m";

    return `${days}d ${hours}h ${minutes}m`;
  };

  const handleComingSoon = (title: string) => {
    setToast({ show: true, message: title });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => (isHeroVisible.current = entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isHeroVisible.current) return;
    const container = scrollContainerRef.current;
    const card = cardRefs.current[activeIndex];

    // Only scroll the horizontal container on mobile without locking vertical page scroll
    if (container && card && window.innerWidth < 1280) {
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const scrollLeft = container.scrollLeft + (cardRect.left - containerRect.left) - (containerRect.width / 2) + (cardRect.width / 2);
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeIndex]);

  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => setActiveIndex((p) => (p + 1) % industries.length), 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const prefetchEHRVideo = () => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = '/Video/EHRVideo.mp4';
    document.head.appendChild(link);
  };

  const prefetchBNFVideo = () => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = '/Video/LandingBnf.mp4';
    video.style.display = 'none';
    document.body.appendChild(video);
    // Clean up after metadata loads
    video.onloadedmetadata = () => {
      video.remove();
    };
  };

  return (
    <>
      <Navbar />
      <div className="bg-black flex flex-col font-quicksand overflow-x-clip">
        <div ref={heroRef} className="relative min-h-[100svh] md:min-h-[70svh] xl:min-h-screen flex items-center md:pt-15 xl:py-6">
          <div className="max-w-8xl xl:px-10 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-[60%_1fr_20%] gap-10 xl:gap-8 items-stretch pt-28 md:pt-15 xl:pr-10">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col justify-between mx-10">
                <div className="space-y-6">
                  <H1 className="text-white">
                    Shaping The Future <br className="hidden sm:block" /> Across Every Sector
                  </H1>
                  <P className="text-[#F5F5F5] max-w-2xl leading-relaxed">
                    Qnest Global helps businesses modernize with AI, CRM, HRM, and secure cloud platforms. Our teams design, build, and manage solutions that improve efficiency, cut risk, and support long‑term growth.
                  </P>
                  <Link to="/contact" className="inline-block w-fit">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="bg-white w-fit text-black px-8 py-4 rounded-2xl font-bold text-sm cursor-pointer flex items-center gap-2 mt-4 xl:mt-0 shadow-xl">
                      Get Your Custom Proposal <ArrowUpRight size={18} />
                    </motion.button>
                  </Link>
                </div>

                <div className="flex flex-wrap font-quadran   gap-10 xl:gap-15 mt-12 xl:mt-0">
                  {[
                    { label: '30%', sub: 'AI-Driven Outcomes' },
                    { label: '24/7', sub: 'End-to-End Delivery' },
                    { label: '99.9%', sub: 'Secure, Scalable Cloud' }
                  ].map((stat, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-[4px] bg-[#92278F] opacity-100"></div>
                      <div>
                        <div className="text-4xl xl:text-6xl font-bold text-white whitespace-nowrap tracking-tighter">{stat.label}</div>
                        <div className="text-[#F5F5F5] text-[10px] mt-1 uppercase tracking-widest font-quicksand">{stat.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="hidden xl:block"></div>

              <div className="relative flex flex-col justify-center mt-10 xl:mt-0">
                <div ref={scrollContainerRef}
                  style={{ touchAction: 'auto', WebkitOverflowScrolling: "touch", scrollPadding: "1.5rem" }}
                  className="flex flex-row xl:flex-col items-center xl:items-end gap-6 xl:gap-6 overflow-x-auto xl:overflow-visible pt-6 pb-12 xl:py-0 scrollbar-hide justify-start xl:justify-end px-6 xl:px-6">

                  <AnimatePresence mode="popLayout">
                    {industries.map((industry, index) => (
                      <div key={industry.title} className="flex flex-col items-center">
                        <IndustryCard
                          ref={(el) => { cardRefs.current[index] = el; }}
                          title={industry.title}
                          image={industry.image}
                          url={industry.url}
                          isReady={industry.isReady}
                          isActive={activeIndex === index}
                          isMobile={isMobile}
                          onClick={() => setActiveIndex(index)}
                          onComingSoonClick={handleComingSoon}
                          onNavigate={(url) => window.open(url, '_blank')}
                          onPrefetch={
                            industry.title === 'EHR and PMS' ? prefetchEHRVideo
                              : industry.title === 'Banking and Finance' ? prefetchBNFVideo
                                : undefined
                          }

                          countdownText={getCountdown(industry.deadline)}
                        />
                      </div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 blur-[120px] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <Toast
          message={toast.message}
          isVisible={toast.show}
        />
      </div>
    </>
  );
}