import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue, MotionValue, animate } from "framer-motion";
import type { Variants } from "framer-motion";
import { H1 } from "../../../styles/Typography";

const TitleSec = () => {
  const images: string[] = [
    "/HighTech/Careers/img1.png",
    "/HighTech/Careers/img2.png",
    "/HighTech/Careers/img3.png",
    "/HighTech/Careers/img4.png",
    "/HighTech/Careers/img5.png",
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 15 });
  const [isMobile, setIsMobile] = useState(false);
  const carouselX = useMotionValue(0);
  const animationRef = useRef<any>(null);
  const currentIndexRef = useRef(0);
  
  // Create infinite loop with multiple copies
  const infiniteImages = [...images, ...images, ...images, ...images];

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1440);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (isMobile) return;
      const x = (e.clientX - window.innerWidth / 2) / 20;
      const y = (e.clientY - window.innerHeight / 2) / 20;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY, isMobile]);

  // Auto-scroll for mobile carousel
  useEffect(() => {
    if (!isMobile) return;

    const cardWidth = window.innerWidth * 0.45 + 16;
    
    // Start from the second set of images
    const startIndex = images.length;
    carouselX.set(-startIndex * cardWidth);
    currentIndexRef.current = startIndex;

    const startAutoScroll = (fromIndex: number) => {
      const scrollToNext = (index: number) => {
        const targetX = -(index + 1) * cardWidth;
        
        animationRef.current = animate(carouselX, targetX, {
          duration: 2.5,
          ease: "linear",
          onComplete: () => {
            let nextIndex = index + 1;
            
            // Reset to middle set when we reach the end
            if (nextIndex >= images.length * 3) {
              nextIndex = images.length;
              carouselX.set(-nextIndex * cardWidth);
            }
            
            currentIndexRef.current = nextIndex;
            scrollToNext(nextIndex);
          }
        });
      };
      
      scrollToNext(fromIndex);
    };

    startAutoScroll(startIndex);

    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [isMobile, images.length, carouselX]);

  // 3D TILT TRANSFORMS
  const rotationInput = [-35, 35];
  const rotationDegrees = 10;
  const rotationRange = [-rotationDegrees, rotationDegrees];

  const rotateY = useTransform(
    smoothX,
    rotationInput,
    rotationRange.map((v) => -v)
  );
  const rotateX = useTransform(smoothY, rotationInput, rotationRange);

  const depth = [3, 3, 3, 3, 3];
  const transforms = depth.map((d) => ({
    x: useTransform(smoothX, (v) => v * -d),
    y: useTransform(smoothY, (v) => v * -d),
  }));

  const textFadeIn = (delay: number): Variants => ({
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as any,
      },
    },
  });

  const imagePopIn = (delay: number): Variants => ({
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      rotate: Math.random() * 20 - 10,
      z: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      z: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay,
      },
    },
  });

  const handleDragStart = () => {
    // Stop auto-scroll animation
    if (animationRef.current) {
      animationRef.current.stop();
    }
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: any) => {
    const cardWidth = window.innerWidth * 0.45 + 16;
    const currentX = carouselX.get();
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    
    // Calculate target position based on drag
    const targetX = currentX + offset + velocity * 0.1;
    let targetIndex = Math.round(-targetX / cardWidth);
    
    // Clamp to valid range
    if (targetIndex < 0) targetIndex = 0;
    if (targetIndex >= infiniteImages.length) targetIndex = infiniteImages.length - 1;
    
    const finalX = -(targetIndex * cardWidth);
    
    // Handle infinite loop reset - keep in middle sets
    if (targetIndex >= images.length * 3) {
      targetIndex = images.length + (targetIndex % images.length);
    } else if (targetIndex < images.length) {
      targetIndex = images.length * 2 + (targetIndex % images.length);
    }
    
    // Animate to snap position
    animate(carouselX, finalX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      onComplete: () => {
        // Update position for infinite loop
        const adjustedX = -(targetIndex * cardWidth);
        carouselX.set(adjustedX);
        currentIndexRef.current = targetIndex;
        
        // Resume auto-scroll from current position
        const scrollToNext = (index: number) => {
          const nextTargetX = -(index + 1) * cardWidth;
          
          animationRef.current = animate(carouselX, nextTargetX, {
            duration: 3.5,
            ease: "linear",
            onComplete: () => {
              let nextIndex = index + 1;
              
              // Reset to middle set when we reach the end
              if (nextIndex >= images.length * 3) {
                nextIndex = images.length;
                carouselX.set(-nextIndex * cardWidth);
              }
              
              currentIndexRef.current = nextIndex;
              scrollToNext(nextIndex);
            }
          });
        };
        
        scrollToNext(targetIndex);
      }
    });
  };

  return (
    <section
      className="relative w-full xl:min-h-screen overflow-hidden flex justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/HighTech/Careers/bg_img.png')`,
        perspective: "1000px",
        marginBottom: "-1px",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Mobile Layout */}
      {isMobile ? (
        <div className="w-full h-full relative z-10">
          {/* Heading at top */}
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textFadeIn(0.3)}
            className="pt-20 pb-20 px-4"
          > */}
            <H1 className="text-white text-center pt-32 pb-32 px-4">
              Shaping the Future <br /> Across Every Sector
            </H1>
          {/* </motion.div> */}

          {/* Carousel at bottom */}
          <div className=" items-center">
            <div className="w-full overflow-hidden pt-12 mb-0 pb-10 md:pb-26" style={{ perspective: "1200px" }}>
              <motion.div
                className="flex gap-4 px-4"
                drag="x"
                dragConstraints={{ left: -Infinity, right: Infinity }}
                dragElastic={0.05}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{ x: carouselX }}
              >
                {infiniteImages.map((src, i) => {
                  return (
                    <CarouselCard 
                      key={`card-${i}`}
                      src={src}
                      index={i}
                      totalImages={images.length}
                      carouselX={carouselX}
                    />
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        /* Desktop Layout - Original 3D Parallax */
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textFadeIn(0.6)}
            className="z-20 text-center px-4"
          >
            <H1 className="text-white mx-auto md:mt-[-320px] lg:mt-[-400px] xl:mt-70">
              Shaping the Future <br /> Across Every Sector
            </H1>
          </motion.div>

          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            {images.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`sector-${i + 1}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={imagePopIn(0.2 * i)}
                style={{
                  x: transforms[i].x,
                  y: transforms[i].y,
                  rotateY: rotateY,
                  rotateX: rotateX,
                }}
                className={`absolute object-cover rounded-xl shadow-lg
                  ${
                    i === 0
                      ? "w-[250px] lg:w-[320px] xl:w-[350px] h-[200px] lg:h-[250px] xl:h-[280px] top-[80px] lg:top-[50px] xl:top-[50px] left-[40px] lg:left-[-30px] xl:left-[-10px]"
                      : ""
                  }
                  ${
                    i === 1
                      ? "w-[180px] lg:w-[200px] xl:w-[220px] h-[160px] lg:h-[180px] xl:h-[200px] top-[60px] lg:top-[60px] xl:top-[70px] right-[250px] lg:right-[150px] xl:right-[400px]"
                      : ""
                  }
                  ${
                    i === 2
                      ? "w-[230px] lg:w-[260px] xl:w-[340px] h-[200px] lg:h-[220px] xl:h-[280px] top-[450px] lg:top-[450px] xl:top-[420px] left-[45px] lg:left-[60px] xl:left-[70px]"
                      : ""
                  }
                  ${
                    i === 3
                      ? "w-[250px] lg:w-[270px] xl:w-[290px] h-[300px] lg:h-[280px] xl:h-[330px] top-[200px] lg:top-[300px] xl:top-[220px] right-[-100px] lg:right-[-120px] xl:right-[-20px]"
                      : ""
                  }
                  ${
                    i === 4
                      ? "w-[200px] lg:w-[220px] xl:w-[290px] h-[160px] lg:h-[180px] xl:h-[200px] top-[480px] lg:top-[500px] xl:top-[480px] left-1/2 transform -translate-x-1/2"
                      : ""
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

// Separate component for carousel cards
interface CarouselCardProps {
  src: string;
  index: number;
  totalImages: number;
  carouselX: MotionValue<number>;
}

const CarouselCard = ({ src, index, totalImages, carouselX }: CarouselCardProps) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 400);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const cardWidth = windowWidth * 0.45 + 16;
  
  const cardX = useTransform(carouselX, (x: number) => {
    const pos = index * cardWidth + x;
    const center = windowWidth / 2;
    const distance = (pos + (windowWidth * 0.45) / 2 - center) / center;
    return distance;
  });
  
  const rotateYCard = useTransform(cardX, [-1, 0, 1], [15, 0, -15]);
  const rotateXCard = useTransform(cardX, [-1, 0, 1], [-5, 0, -5]);
  const scale = useTransform(cardX, [-1, -0.5, 0, 0.5, 1], [0.9, 0.95, 1, 0.95, 0.9]);

  return (
    <motion.div
      className="flex-shrink-0 rounded-xl overflow-hidden relative"
      style={{ 
        width: "45vw", 
        height: "60vw",
        rotateY: rotateYCard,
        rotateX: rotateXCard,
        scale: scale,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % totalImages) * 0.1, duration: 0.5 }}
    >
      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none z-10"
        style={{
          boxShadow: "0 0 20px 2px rgba(59, 130, 246, 0.6), inset 0 0 20px 2px rgba(59, 130, 246, 0.3)",
          border: "2px solid rgba(59, 130, 246, 0.8)",
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <img
        src={src}
        alt={`sector-${(index % totalImages) + 1}`}
        className="w-full h-full object-cover"
        draggable="false"
      />
    </motion.div>
  );
};

export default TitleSec;