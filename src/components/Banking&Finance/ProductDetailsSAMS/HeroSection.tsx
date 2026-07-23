import React, { useContext, useEffect, useRef } from 'react';
// import { ContactUs } from '../../../styles/Button';
import { H1, P } from '../../../styles/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ScrollContext } from '../../../context/ScrollContext';
import { Link } from 'react-router-dom';

/* -----------------------------------------------------------
    Animation + Component Utilities (Corrected)
------------------------------------------------------------ */
interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  index?: number;
}

interface ScrollAnimatedCircleProps {
  size: string;
  border: string;
  color: string;
  translate: string;
  className?: string;
  parallaxIntensity?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 120,
    }
  }
};

const floatingAnimation = {
  y: [-15, 15, -15],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

const rotateAnimation = {
  rotate: [0, 8, 0, -8, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

const scalePulseAnimation = {
  scale: [1, 1.08, 1],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

/* -----------------------------------------------------------
    Tilt Image Component
------------------------------------------------------------ */
const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className, index = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPct = (event.clientX - rect.left) / rect.width - 0.5;
    const yPct = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollableContainerRef = useContext(ScrollContext);

  useEffect(() => {
    // Scroll the ScrollContext container to top
    if (scrollableContainerRef) {
      (scrollableContainerRef as any).scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // Fallback to window scroll if ScrollContext not available
     window.scrollTo(0, 0);
    }
  }, [scrollableContainerRef]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring" as const, damping: 15, stiffness: 100, delay: index * 0.04 }
      } : {}}
      whileHover={{ scale: 1.03, y: -8 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" as const }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative cursor-pointer ${className}`}
    >
      <motion.div style={{ transformStyle: "preserve-3d" as const }}>
        <motion.div
          className="relative p-1 rounded-lg"
          initial={{ background: "transparent" }}
          whileHover={{
            background:
              "linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6, #8B5CF6)",
            backgroundSize: "300% 300%",
            transition: { duration: 0.5 }
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: { duration: 3, repeat: Infinity, repeatType: "reverse" as const, ease: "linear" }
          }}
        >
          <motion.img src={src} alt={alt} className="w-full h-full object-cover rounded-lg" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

/* -----------------------------------------------------------
    Carousel Image Component
------------------------------------------------------------ */
const AnimatedCarouselImage: React.FC<AnimatedImageProps> = ({ src, alt, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring" as const, damping: 20, stiffness: 100 }
      } : {}}
      whileHover={{ scale: 1.04, y: -4 }}
      className={`relative ${className}`}
    >
      <div className="relative w-full pt-[56.25%]">
        <motion.div
          className="absolute inset-0 p-1 rounded-lg"
          initial={{ background: "transparent" }}
          whileHover={{
            background:
              "linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6, #8B5CF6)",
            backgroundSize: "300% 300%"
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: { duration: 3, repeat: Infinity, repeatType: "reverse" as const, ease: "linear" }
          }}
        >
          <motion.img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        </motion.div>
      </div>
    </motion.div>
  );
};

/* -----------------------------------------------------------
    Scroll Circle Component (Corrected)
------------------------------------------------------------ */
const ScrollAnimatedCircle: React.FC<ScrollAnimatedCircleProps> = ({
  size,
  border,
  color,
  className = "",
  parallaxIntensity = 100
}) => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxIntensity]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        transform: "translate3d(0,0,0)", // Safari GPU fix
        willChange: "transform"
      }}
      animate={floatingAnimation}
      className={`absolute rounded-full ${size} ${border} ${color} ${className}`}
    />
  );
};

/* -----------------------------------------------------------
    HERO SECTION (With background image)
------------------------------------------------------------ */
const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const carouselImages = [
    { id: 1, src: "/SAMS/img1.png", alt: "Dashboard 1" },
    { id: 2, src: "/SAMS/img3.png", alt: "Dashboard 2" },
    { id: 3, src: "/SAMS/img2.png", alt: "Dashboard 3" },
  ];

  const carouselSettings = {
    dots: true, infinite: true, speed: 500,
    slidesToShow: 1, slidesToScroll: 1,
    autoplay: true, autoplaySpeed: 3000, arrows: false 
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: "url('/SAMS/bg_img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full flex flex-col">

        <ScrollAnimatedCircle
          size="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]"
          border="border-[8px]"
          color="border-[#7087e933]"
          className="opacity-60 top-[-120px] right-[-120px]"
          parallaxIntensity={150} translate={''}        />

        <ScrollAnimatedCircle
          size="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]"
          border="border-[6px]"
          color="border-[#FED60033]"
          className="opacity-60 top-[-120px] right-[-120px]"
          parallaxIntensity={100} translate={''}        />

          <motion.div
  className="absolute top-[-40px] right-[120px] z-20"
  animate={{
    y: [0, -10, 0]
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <img
    src="/SAMS/circle.svg"
    alt="center"
    className="w-[120px] md:w-[160px] lg:w-[200px]"
  />
</motion.div>

        <motion.div
          animate={rotateAnimation}
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-blue-200/20 blur-xl"
        />

        <motion.div
          animate={scalePulseAnimation}
          className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-yellow-200/30 blur-lg"
        />

        {/* ✅ WRAPPER ADDED HERE */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">

          {/* Main Content */}
          <motion.div
            style={{ y: contentY }}
            variants={containerVariants}
            className="relative pt-24 z-10 w-full mx-auto max-w-[1400px] mt-20 py-16 flex flex-col items-center md:items-start gap-6 text-center md:text-left"
          >
            <motion.div variants={itemVariants}>
              <H1>Lorem ipsum dolor , <br /> consectetur adipis</H1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <P className="max-w-xl lg:max-w-2xl mt-[-10px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.sdefsfe fwevg aev ht hba v
              </P>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
            to="#contact-us"
            onClick={(e) => {
              const el = document.getElementById("contact-us");
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {/* <ContactUs>Contact Us </ContactUs> */}
          </Link>
            </motion.div>
          </motion.div>

          {/* Images Section */}
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-full px-4 sm:px-6 lg:px-16"
          >
            <div className="xl:hidden mx-auto w-full max-w-[800px] pb-8">
              <Slider {...carouselSettings}>
                {carouselImages.map(img => (
                  <div key={img.id} className="p-4">
                    <AnimatedCarouselImage src={img.src} alt={img.alt} className="p-2" />
                  </div>
                ))}
              </Slider>
            </div>

            <motion.div
              variants={containerVariants}
              className="hidden xl:flex gap-8 justify-center px-20 scroll-smooth"
            >
              {[
                "/SAMS/img3.png",
                "/SAMS/img2.png",
                "/SAMS/img3.png"
              ].map((src, index) => (
                <AnimatedImage
                  key={index}
                  src={src}
                  alt={`Dashboard ${index + 1}`}
                  index={index}
                  className="flex-shrink-0 rounded-lg 
w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[400px]
h-[320px] sm:h-[360px] md:h-[420px] lg:h-[460px] xl:h-[480px]"
                
                />
              ))}
            </motion.div>

          </motion.div>

        </div>
        {/* ✅ WRAPPER END */}

      </div>
    </motion.section>
  );

};



export default HeroSection;
