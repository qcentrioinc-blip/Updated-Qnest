import { useEffect, useRef, useState } from "react";
import { H1, H2, P } from "../../../styles/Typography";

const DATA = [
  {
    id: 1,
    title: "Lorem ipsum dolor, consectetur adipis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehe nderit in voluptate velit ",
    img: "Image 1",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor, consectetur adipis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehe nderit in voluptate velit ",
    img: "Image 2",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor, consectetur adipis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehe nderit in voluptate velit ",
    img: "Image 3",
  },
];

export default function Cards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [scrollY, setScrollY] = useState(0);

  /* -------------------------
     SCROLL TRACKING
  -------------------------- */
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-24 px-6 lg:px-12"
    >
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <H1 className="text-[#F5F5F5]">
            Lorem ipsum dolor,
            <br />
            consectetur adipis conse
          </H1>
        </div>

        {/* Cards */}
        {DATA.map((card, i) => {
          const cardTop =
            cardRefs.current[i]?.getBoundingClientRect().top +
            window.scrollY || 0;

          const stackStart = cardTop - window.innerHeight * 0.25;
          const stackEnd = cardTop - window.innerHeight * 0.05;

          let progress = (scrollY - stackStart) / (stackEnd - stackStart);
          progress = Math.min(Math.max(progress, 0), 1);

          const scale = 1 - progress * 0.12;
          const translateY = progress * i * 40;

          return (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardRefs.current[i] = el;
              }}
              className="
                sticky top-28 mb-16
                bg-[#EAF2FB] border border-blue-200
                rounded-xl p-10
                h-[480px] sm:h-[550px] md:h-[600px]
                flex flex-col lg:flex-row gap-10
                will-change-transform
              "
              style={{
                transform: `
                  translate3d(0, ${translateY}px, 0)
                  scale(${scale})
                `,
                transformOrigin: "top center",
              }}
            >
              {/* Text */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <H2 className="mb-8">
                  {card.title}
                </H2>
                <P className=" leading-relaxed">
                  {card.text}
                </P>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 h-64 sm:h-72 md:h-[500px] bg-gray-300 rounded-lg flex items-center justify-center">
                {card.img}
              </div>
            </div>
          );
        })}

        {/* Spacer so last card can unpin */}
        <div className="h-[60vh]" />
      </div>
    </section>
  );
}
