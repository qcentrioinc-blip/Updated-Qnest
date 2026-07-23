import { useState, useEffect, useRef } from 'react';
import { H2, P } from '../../../styles/Typography';
import { useLocation } from "react-router-dom";
const testimonials = [
  {
    id: 1,
    text: "Bankfair streamlined our core operations and reduced manual work significantly.   ",
    name: " Michael Thompson",
    title: "Chief Technology Officer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face%22%22"
  },
  {
    id: 2,
    text: "Sherlock transformed our AML compliance with automated monitoring and real-time alerts. ",
    name: " Jennifer Martinez",
    title: "Compliance Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face%22%22"
  },
  {
    id: 3,
    text: "Remitree simplified our cross-border payments and integrated seamlessly with SWIFT.   ",
    name: "Robert Williams",
    title: "Operations Head",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face%22%22"
  },
  {
    id: 4,
    text: "PAGO payment system handles high transaction volumes with ease. Real-time monitoring and security.  ",
    name: "Sarah Johnson",
    title: "Payments Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face%22%22"
  },
  {
    id: 5,
    text: "CDD and KYC platform digitized our entire onboarding process. We now onboard customers in hours instead of days.",
    name: "David Chen",
    title: "Freelance Designer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face%22%22"
  },
  {
    id: 6,
    text: "Conciliare automated our reconciliation completely. Manual matching errors are gone and monthly closing within hours.  ",
    name: "Lisa Anderson",
    title: "Finance Controller",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face%22%22"
  }
];

const Testimonial = () => {
  const location = useLocation();
  const isBankingPage = location.pathname === "/industries/banking-and-finance";

  const cardBg = isBankingPage ? "#ffff" : "#000";
  const textColor = isBankingPage ? "#000" : "#fff";


  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(448);
  const [gap, setGap] = useState(24);
  const trackRef = useRef<HTMLDivElement>(null);

  const clonedSlides = [testimonials[testimonials.length - 1], ...testimonials, testimonials[0]];

  const updateResponsive = () => {
    if (window.innerWidth < 640) {
      setVisibleCards(1);
      setCardWidth(window.innerWidth - 32);
      setGap(16);
    } else if (window.innerWidth < 1024) {
      setVisibleCards(2);
      setCardWidth((window.innerWidth - 64 - 20) / 2);
      setGap(20);
    } else {
      setVisibleCards(3);
      setCardWidth((window.innerWidth - 96 - 48) / 3);
      setGap(24);
    }
  };

  useEffect(() => {
    updateResponsive();
    window.addEventListener('resize', updateResponsive);
    return () => window.removeEventListener('resize', updateResponsive);
  }, []);

  const totalCardWidth = cardWidth + gap;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev - 1);
  };

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (currentIndex === clonedSlides.length - 1) {
        setCurrentIndex(1);
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          trackRef.current.style.transform = `translateX(${-totalCardWidth * 1}px)`;
          void trackRef.current.offsetWidth;
          trackRef.current.style.transition = 'transform 0.3s ease-in-out';
        }
      } else if (currentIndex === 0) {
        setCurrentIndex(clonedSlides.length - 2);
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          trackRef.current.style.transform = `translateX(${-totalCardWidth * (clonedSlides.length - 2)}px)`;
          void trackRef.current.offsetWidth;
          trackRef.current.style.transition = 'transform 0.3s ease-in-out';
        }
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex, totalCardWidth, clonedSlides.length, isAnimating]);

  const translateX = -currentIndex * totalCardWidth;

  return (
    <div className="w-full relative     py-8 sm:py-12 md:py-16">
      <div className="w-full px-4 sm:px-6">
        <H2 className='text-center pb-4 sm:pb-8 text-black'>What Our Clients Say</H2>
        <div className="relative   xl:w-full flex justify-center items-center">
          {/* Left Gradient */}
          {/* <div className="absolute left-0 top-0 h-full w-10 bg-linear-to-l from-transparent via-white/50 to-white z-10 pointer-events-none"
          style={{ width: `${gradientWidth}px` }}
          ></div> */}
          {/* Right Gradient */}
          {/* <div className="absolute right-0 top-0 h-full w-10 bg-linear-to-r from-transparent via-white/50 to-white z-10 pointer-events-none"
          style={{ width: `${gradientWidth}px` }}
          ></div> */}
          {/* Left Chevron */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute top-22 transform -translate-y-1  z-20 
             rounded-full flex items-center justify-start 
             shadow-md hover:shadow-lg transition-shadow 
             border border-gray-400 bg-[#F5F5F5]"
            style={{
              width: "44px",
              height: "44px",
              left: "-4px",
              padding: "6px",
            }}
          >
            <img src="/Testimonial/LeftChev.png"
              className="w-6 h-5 items-center absolute  right-1/4"
              loading="eager"
            />
          </button>


          {/* Right Chevron */}
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute  top-22 transform -translate-y-1  z-20 
             rounded-full flex items-center justify-center 
             shadow-md hover:shadow-lg transition-shadow 
             border border-gray-400 bg-[#F5F5F5]"
            style={{
              width: "44px",
              height: "44px",
              right: "-4px",
              padding: "6px",
            }}
          >
            {/* <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-black"
  > */}
            {/* <path
      d="M9 6L15 12L9 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg> */}

            <img src="/Testimonial/RightChev.png"
              className="w-6 h-5 items-center absolute  left-1/4"
              loading="eager"
            />
          </button>


          {/* Carousel Track */}
          <div className="overflow-hidden w-full" style={{ maxWidth: `${visibleCards * cardWidth + (visibleCards - 1) * gap}px` }}>
            <div
              ref={trackRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(${translateX}px)`, gap: `${gap}px` }}
            >
              {clonedSlides.map((testimonial, idx) => (
                <div key={idx} className="flex shrink-0 bg-[#ACCAEF]  rounded-lg" style={{
                  width: `${cardWidth}px`,
                  height: '200px',
                  borderRadius: '16px',
                  border: "1px solid #7f7f7f",
                  padding: '24px 32px',
                  backgroundColor: cardBg,
                  color: textColor,
                }}>
                  <div className="flex flex-col justify-between h-full">
                    <P style={{ color: textColor }} className="  text-lg leading-relaxed flex-1">{testimonial.text}</P>
                    <div className="flex items-center gap-3">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                      <div className=' flex flex-col gap-1'>
                        <div style={{ color: textColor }} className="text-md font-quicksand ">{testimonial.name}</div>
                        <div style={{ color: textColor }} className="text-md font-quicksand ">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
