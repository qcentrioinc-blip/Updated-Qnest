'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  image: string;
}

const SmallArticle = () => {
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

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp - San Francisco, US",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      author: "Michael Chen",
      role: "CTO, InnovateLabs - Singapore",
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      author: "Emma Rodriguez",
      role: "Founder, StartupHub - Barcelona, Spain",
      image: "/api/placeholder/80/80"
    },
    {
      id: 4,
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.",
      author: "David Kim",
      role: "VP Engineering, CloudScale - Seoul, South Korea",
      image: "/api/placeholder/80/80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div 
      ref={sectionRef}
      className="w-full bg-black min-h-auto sm:min-h-auto lg:min-h-auto xl:min-h-screen py-12 sm:py-14 lg:py-16 px-4 sm:px-6"
    >
      <div className="max-w-8xl mx-auto lg:mx-10 px-2 sm:px-4 lg:px-6">
        {/* MOBILE + TABLET LAYOUT */}
        <div className="block lg:hidden">
          {/* Header Section */}
          <div className="mb-10 sm:mb-12">
            <h2
              className="transition-all duration-700 ease-in-out"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(24px, 5vw, 32px)",
                lineHeight: "110%",
                color: "#F5F5F5",
                marginBottom: "10px",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0.1s'
              }}
            >
              Sed ut perspiciatis
            </h2>
            <h3
              className="transition-all duration-700 ease-in-out"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: "clamp(20px, 4.5vw, 28px)",
                lineHeight: "110%",
                letterSpacing: "0%",
                color: "#F99526",
                whiteSpace: "normal",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0.3s'
              }}
            >
              Unde Seduo ut perspiciatis
            </h3>
          </div>

          {/* Horizontal Dotted Line with Navigation Arrows */}
          <div 
            className="relative mb-10 sm:mb-12 transition-all duration-700 ease-in-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transitionDelay: '0.5s'
            }}
          >
            {/* Dotted Line */}
            <div
              className="w-full pr-24 sm:pr-28"
              style={{
                borderTop: "2px dashed rgba(255, 255, 255, 0.9)",
                height: "3px",
              }}
            />

            {/* Navigation Arrows - Right Side */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-3 sm:gap-4">
              {/* Up Arrow Button */}
              <button
                onClick={handlePrevious}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors active:scale-95"
                aria-label="Previous testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </button>

              {/* Down Arrow Button */}
              <button
                onClick={handleNext}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors active:scale-95"
                aria-label="Next testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial Content with Transition */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="mb-10 sm:mb-12"
            >
              <p
                className="text-white max-w-xl sm:max-w-2xl"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(18px, 4vw, 24px)",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                }}
              >
                {currentTestimonial.text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Author Info Section with Transition */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`author-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              {/* Profile Image - Circle */}
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-300 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentTestimonial.image})` }}
              />

              {/* Name and Title */}
              <div className="mb-2 sm:mb-0">
                <h4
                  className="text-white mb-1"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(18px, 3vw, 22px)",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                  }}
                >
                  {currentTestimonial.author}, {currentTestimonial.role}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-gray-500 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:block">
          {/* Header Section */}
          <div className="mb-16">
            <h2
              className="transition-all duration-700 ease-in-out"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: "42px",
                lineHeight: "100%",
                color: "#F5F5F5",
                marginBottom: "12px",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0.1s'
              }}
            >
              Sed ut perspiciatis
            </h2>
            <h3
              className="transition-all duration-700 ease-in-out"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: "40px",
                lineHeight: "86%",
                letterSpacing: "0%",
                color: "#F99526",
                whiteSpace: "nowrap",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0.3s'
              }}
            >
              Unde Seduo ut perspiciatis
            </h3>
          </div>

          {/* Horizontal Dotted Line with Navigation Arrows */}
          <div 
            className="relative mb-16 transition-all duration-700 ease-in-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transitionDelay: '0.5s'
            }}
          >
            {/* Dotted Line */}
            <div
              className="w-full"
              style={{
                borderTop: "2px dashed rgba(255, 255, 255, 0.9)",
                height: "3px",
              }}
            />

            {/* Navigation Arrows - Right Side */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex gap-4">
              {/* Up Arrow Button */}
              <button
                onClick={handlePrevious}
                className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors active:scale-95"
                aria-label="Previous testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </button>

              {/* Down Arrow Button */}
              <button
                onClick={handleNext}
                className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors active:scale-95"
                aria-label="Next testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial Content with Transition */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="mb-16"
            >
              <p
                className="text-white max-w-8xl"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 600,
                  fontSize: "35px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                {currentTestimonial.text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Author Info Section with Transition */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`author-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="flex flex-col gap-6"
            >
              {/* Profile Image - Circle */}
              <div 
                className="w-20 h-20 rounded-full bg-gray-300 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentTestimonial.image})` }}
              />

              {/* Name and Title */}
              <div className="mb-4">
                <h4
                  className="text-white mb-1"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {currentTestimonial.author}, {currentTestimonial.role}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-500 w-12' 
                    : 'bg-gray-500 w-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallArticle;
