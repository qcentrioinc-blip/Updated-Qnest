"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { H2, H4, P } from "../../../styles/Typography";

export default function BlogCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const autoScroll = () => {
      if (!slider || !isAutoScrollEnabled || isScrollingRef.current) {
        animationFrameRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      const middleSectionStart = slider.scrollWidth / 3;
      const middleSectionEnd = middleSectionStart * 2;

      if (slider.scrollLeft >= middleSectionEnd - slider.clientWidth) {
        slider.scrollTo({ left: middleSectionStart, behavior: "instant" });
      }
      else {
        slider.scrollLeft += 1.4;
      }

      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAutoScrollEnabled]);

  const scrollNext = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsAutoScrollEnabled(false);
    isScrollingRef.current = true;

    // Decreased by 25%: 420 * 0.75 = 315
    slider.scrollBy({
      left: 315,
      behavior: "smooth",
    });

    // Re-enable auto-scroll after 3 seconds
    setTimeout(() => {
      setIsAutoScrollEnabled(true);
      isScrollingRef.current = false;
    }, 3000);
  }, []);

  const scrollPrev = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Temporarily disable auto-scroll during manual navigation
    setIsAutoScrollEnabled(false);
    isScrollingRef.current = true;

    // Decreased by 25%: 420 * 0.75 = 315
    slider.scrollBy({
      left: -315,
      behavior: "smooth",
    });

    // Re-enable auto-scroll after 3 seconds
    setTimeout(() => {
      setIsAutoScrollEnabled(true);
      isScrollingRef.current = false;
    }, 3000);
  }, []);

  const cards = [
    {
      id: 1,
      date: "8 Sep 2025",
      title: "Sed ut perspiciatis Unde Seduo ut perspiciatis ut perspiciatis",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
      img: "/EHRIcons/ImageDoctor.webp",
    },
    {
      id: 2,
      date: "8 Sep 2025",
      title: "Sed ut perspiciatis Unde Seduo ut perspiciatis ut perspiciatis",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
      img: "/EHRIcons/ImageDoctor.webp",
    },
    {
      id: 3,
      date: "8 Sep 2025",
      title: "Sed ut perspiciatis Unde Seduo ut perspiciatis ut perspiciatis",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
      img: "/EHRIcons/ImageDoctor.webp",
    },
    {
      id: 4,
      date: "8 Sep 2025",
      title: "Sed ut perspiciatis Unde Seduo ut perspiciatis ut perspiciatis",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
      img: "/EHRIcons/ImageDoctor.webp",
    },
  ];

  const loopCards = cards.concat(cards, cards);


  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-8xl mx-10 xl:px-10 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10">

        {/* LEFT SECTION */}
        <div className="flex flex-col items-start">
          <H2 className="text-[#156644] leading-tight">
            Insights for Long-Term Care
          </H2>

          <P className=" mt-4">
            Explore expert articles on regulatory updates, resident care best practices, and operational efficiency for LTC providers.
          </P>

          {/* ARROWS */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-[#F2A900] flex items-center justify-center text-white hover:bg-[#d68c00] transition"
            >
              <ArrowLeft size={22} />
            </button>

            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-[#F2A900] flex items-center justify-center text-white hover:bg-[#d68c00] transition"
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </div>

        {/* RIGHT SECTION — AUTO SCROLL */}
        <div
          ref={sliderRef}
          //   onMouseEnter={handleMouseEnter}
          //   onMouseLeave={handleMouseLeave}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Hide scrollbar */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
            .carousel-item {
              scroll-snap-align: start;
            }
          `}</style>

          {/* Duplicate for infinite loop */}
          {loopCards.map((card, index) => (

            <div
              key={index}
              className="carousel-item  bg-[#E7E7E7] rounded-sm shadow-md p-6 flex-shrink-0"
              style={{ height: "500px", width: "420px" }}
            >
              <P className="">{card.date}</P>

              <H4 className="mt-2 font-semibold  leading-snug text-gray-800">
                {card.title}
              </H4>

              <P
                className="mt-2">{card.text}</P>

              <img
                src={card.img}
                className="w-full rounded-sm mt-5 h-[290px] object-cover"
                alt="blog"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}