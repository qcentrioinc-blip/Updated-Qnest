import { useContext, useEffect, type ImgHTMLAttributes } from "react";
import { H1, P } from "../../../styles/Typography";
// import { ContactUs } from "../../../styles/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollContext } from "../../../context/ScrollContext";

const handleImageError: ImgHTMLAttributes<HTMLImageElement>["onError"] = (e) => {
  const target = e.target as HTMLImageElement;
  target.onerror = null;
  target.src = "https://placehold.co/300x400/CCCCCC/333333?text=Placeholder";
};

const morphContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const morphItemVariants = {
  hidden: {
    scale: 0.3,
    opacity: 0,
    borderRadius: "50%",
    rotate: -180,
    filter: "blur(20px)"
  },
  visible: {
    scale: 1,
    opacity: 1,
    borderRadius: "8px",
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2 }
  }
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const images = [
    "/ProductDetails(COS)/img1.png",
    "/ProductDetails(COS)/img9.png",
    "/ProductDetails(COS)/img10.png",
  ];

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
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [scrollableContainerRef]);

  return (
    <section ref={sectionRef} className="relative w-full flex items-start justify-center overflow-hidden pt-0 mt-0">
      {/* Backgrounds */}
      <div className="absolute inset-0 hidden md:flex">
        <div className="w-1/2 bg-[#00AA72]" />
        <div className="w-1/2 bg-[#00AA72] relative">
          {/* Desktop Circles */}
          <div
            className="absolute z-0"
            style={{
              width: '512.22px',
              height: '512.22px',
              top: '-99.82px',
              right: '-200px',
              background: 'rgba(255, 255, 255, 0.11)',
              border: '1px solid #FFFFFF',
              borderRadius: '50%',
              opacity: 1
            }}
          />

          <div
            className="absolute z-0"
            style={{
              width: '387.64px',
              height: '387.64px',
              top: '-37.53px',
              right: '-150px',
              background: 'rgba(249, 149, 38, 0.17)',
              border: '1px solid #FFFFFF',
              borderRadius: '50%',
              opacity: 1
            }}
          />
        </div>
      </div>

      {/* Mobile & Tablet Background with Circles */}
      <div className="absolute inset-0 flex flex-col md:hidden">
        <div className="flex-1 bg-[#00AA72]" />
        <div className="flex-1 bg-[#00AA72] relative">
          {/* Mobile & Tablet Circles - Responsive */}
          <div
            className="absolute z-0"
            style={{
              width: '280px',
              height: '280px',
              top: '-50px',
              right: '-80px',
              background: 'rgba(255, 255, 255, 0.11)',
              border: '1px solid #FFFFFF',
              borderRadius: '50%',
              opacity: 1
            }}
          />

          <div
            className="absolute z-0"
            style={{
              width: '200px',
              height: '200px',
              top: '-20px',
              right: '-50px',
              background: 'rgba(249, 149, 38, 0.17)',
              border: '1px solid #FFFFFF',
              borderRadius: '50%',
              opacity: 1
            }}
          />
        </div>
      </div>

      {/* Tablet Circles */}
      <div className="absolute inset-0 hidden md:flex lg:hidden">
        <div className="w-1/2 bg-[#00AA72]" />
        <div className="w-1/2 bg-[#00AA72] relative">
          {/* Tablet Circles */}
          <div
            className="absolute z-0"
            style={{
              width: '400px',
              height: '400px',
              top: '-80px',
              right: '-120px',
              background: 'rgba(255, 255, 255, 0.11)',
              border: '1px solid #FFFFFF',
              borderRadius: '50%',
              opacity: 1
            }}
          />

          <div
            className="absolute z-0"
            style={{
              width: '300px',
              height: '300px',
              top: '-30px',
              right: '-80px',
              background: 'rgba(249, 149, 38, 0.17)',
              border: '1px solid #FFFFFF',
              borderRadius: '50%',
              opacity: 1
            }}
          />
        </div>
      </div>

      {/* Animated Lines - Responsive */}
      <div className="absolute bottom-[30px] md:left-[50%]  left-6 flex flex-col gap-2 z-[2]">
        {/* Desktop Lines */}
        <div className="hidden md:flex flex-col gap-2">
          {[350, 310, 270].map((width, i) => (
            <motion.div
              key={`desktop-${i}`}
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: `${width}px`, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{
                delay: i * 0.4,
                duration: 1.4,
                ease: "easeInOut"
              }}
              className="h-[2px] bg-white rounded-full origin-left"
            />
          ))}
        </div>

        {/* Mobile Lines */}
        <div className="flex flex-col gap-2 md:hidden">
          {[200, 180, 160].map((width, i) => (
            <motion.div
              key={`mobile-${i}`}
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: `${width}px`, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{
                delay: i * 0.4,
                duration: 1.4,
                ease: "easeInOut"
              }}
              className="h-[2px] bg-white rounded-full origin-left"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative w-full items-center flex flex-col md:flex-row px-4 sm:px-8 py-0 md:py-0 max-w-[1440px] mx-auto gap-4 z-10">

        {/* Text Section */}
        <div className="relative w-full md:w-1/2 flex  mt-10 flex-col justify-center md:pr-4 text-center md:text-left bg-[#FED600] md:bg-transparent py-10 md:py-25">
          <H1 className="mb-6  text-white">
            Lorem ipsum dolor, consectetur adipis
          </H1>
          <P className="mb-8 max-w-xl mx-auto md:mx-0 text-white">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia.
          </P>
          <div className="w-fit mx-auto md:mx-0">
            {/* <ContactUs>CONTACT US</ContactUs> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-screen md:mt-22  md:w-1/2 bg-[#00AA72] md:bg-transparent pb-5 flex justify-center">
          {/* Mobile layout */}
          <motion.div
            className="flex flex-col md:hidden gap-4 z-10"
            variants={morphContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex gap-4 mt-20 justify-center mx-[30px]">
              <motion.img
                src={images[0]}
                alt="Image 1"
                onError={handleImageError}
                variants={morphItemVariants}
                className="w-1/2 h-auto object-cover shadow-xl rounded-lg"
              />
              <motion.img
                src={images[1]}
                alt="Image 2"
                onError={handleImageError}
                variants={morphItemVariants}
                className="w-1/2 h-auto object-contain shadow-xl rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center">
              <motion.img
                src={images[2]}
                alt="Image 3"
                onError={handleImageError}
                variants={morphItemVariants}
                className="w-2/3 h-auto object-contain shadow-xl rounded-lg"
              />
            </div>
          </motion.div>

          {/* Desktop layout - Reduced img2 height */}
          <motion.div
            className="hidden md:grid grid-cols-[auto_auto] items-center justify-center gap-6 mx-auto mt-10 lg:mt-16 max-w-[700px] lg:max-w-[800px] px-6 z-10"
            variants={morphContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="row-span-2 flex justify-center"
              variants={morphItemVariants}
            >
              <img
                src={images[0]}
                alt="Main image"
                onError={handleImageError}
                className="max-w-[380px] max-h-[520px] w-full h-auto object-contain shadow-xl rounded-lg"
              />
            </motion.div>

            <motion.img
              src={images[1]}
              alt="Top image"
              onError={handleImageError}
              variants={morphItemVariants}
              className="max-w-[260px] max-h-[250px] w-full h-auto object-cover shadow-xl rounded-lg"
            />

            <motion.img
              src={images[2]}
              alt="Bottom image"
              onError={handleImageError}
              variants={morphItemVariants}
              className="max-w-[260px] max-h-[320px] w-full h-auto object-contain shadow-xl rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}