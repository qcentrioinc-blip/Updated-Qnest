import { useEffect, useRef, useState } from "react";
import { H3, P } from "../../../styles/Typography";
 

const cards = [
  {
    id: 1,
    // color: "bg-blue-800",
      image: '/HighTech/HomePage/EngineerGirl.png',
    title: "A Leader in Reinvention",
    column: "left",
  },
  
     
        
  {
    id: 2,
    color: "bg-red-800",
    title: "A Great Place To Work®",
    column: "right",
      image: '/HighTech/HomePage/Scientist.png',
  },
  {
    id: 3,
    color: "bg-purple-800",
    title: "A Top Consulting Firm",
    column: "center",
    image:'/HighTech/HomePage/DoctorGirl.png'
  },
];



// const columnStyles: Record<string, string> = {
//   left: "md:left-[5%]",
//   center: "md:left-1/2 md:-translate-x-1/2",
//   right: "md:right-[10%]",
// };

const columnStyles: Record<string, string> = {
  left: "left-1/2 -translate-x-1/2 md:left-[5%] md:translate-x-0",
  center: "left-1/2 -translate-x-1/2",
  right: "left-1/2 -translate-x-1/2 md:right-[10%] md:left-auto md:translate-x-0",
};

export default function FloatingImage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      const progress = Math.min(
        Math.max(-rect.top / totalScroll, 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const [active, setActive] = useState(false);
  return (
    <section
      ref={sectionRef}
      className="relative  h-[200vh] lg:h-[300vh] bg-black text-white"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background heading */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <h2  className=" text-3xl  md:text-5xl lg:text-8xl  font-quadran   text-center max-w-7xl">
            Global recognition and awards
          </h2>
        </div>

        {/* Floating rectangles */}
        <div className="relative h-full w-full z-10">
          {cards.map((card, index) => {
            // const start = index / cards.length;
            // const end = (index + 1) / cards.length;
             const overlap = 0.18; // controls closeness
             const start = index * overlap;
            const end = start + 0.45;

            const localProgress = Math.min(
              Math.max((scrollProgress - end) / (start - end), 0),
              1
            );
            const speedFactor = 0.8; // 🔽 smaller = slower


            const translateY = 100 - localProgress *200 * speedFactor;
            
//             const eased = localProgress * localProgress;
// const translateY = 100 - eased * 140;

            return (
              <div
                key={card.id}
                className={`
                  absolute  w-[350px] md:w-[450px]  h-[200px] md:h-[300px] lg:w-[550px]  lg:h-[380px]
                  ${card.color}
                  
                  transition-transform duration-300
                  ${columnStyles[card.column]}
                `}
                style={{
                  bottom: `${translateY}%`,
                }}
              >
                {/* Background image */}
<img
  src={card.image}
  alt={card.title}
  className="absolute inset-0 w-full h-full object-cover"
/>

{/* Dark overlay (important for text contrast) */}
<div className="absolute inset-0 bg-black/30" />

                <div className="relative h-full w-full overflow-hidden group">
  {/* Default title */}
 <div
  className="
    absolute bottom-0 left-0 w-full p-6
    transition-all duration-500 ease-out
    group-hover:-translate-y-96
     
  "
>
  <H3 className="text-xl md:text-2xl font-medium">
    {card.title}
  </H3>
</div>


  {/* Hover content */}
  <div className="
    absolute bottom-[-100%] left-0 w-full h-full p-6
    flex flex-col justify-between
    transition-transform duration-500 ease-out
    group-hover:-translate-y-full
  ">
    <p className=" text-xl font-quiksand  text-white  mt-4   leading-normal  ">
     Forbes recognized Accenture as one of the most recommended management consulting firms by consultants and clients, across industries and functional areas, around the world.
    </p>

  <button
  onClick={() => setActive(!active)}
  className="relative text-sm font-semibold self-end"
>
  <P
    className={`
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:bg-white text-white
      after:transition-all after:duration-300
      after:w-0
      ${active ? "after:w-full" : ""}
    `}
  >
    See More Articles
  </P>
</button>


  </div>
</div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
