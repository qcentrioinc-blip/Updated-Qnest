import { H2, H3, P } from "../../../styles/Typography";

export default function BusinessValuesSection() {
  const items = [
    {
      img: "/LandingPage/Circle2.png",
      title: "Driven by Outcomes",
      desc: "We focus on measurable improvements in performance, cost, and reliability. ",
    },
    {
      img: "/LandingPage/Polygon.png",
      title: "People‑Centric Delivery",
      desc: "We align technology with how your teams actually work. ",
    },
    {
      img: "/LandingPage/Squar1.png",
      title: "Accountable Partnership",
      desc: "We commit to clear expectations, honest updates, and consistent follow‑through. .",
    },
  ];

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-8xl mx-10 text-left">

        {/* Section Heading */}
        <H2 className="mb-16 leading-tight">
        Reliable. Scalable. Ready for Growth.
        </H2>

        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col items-left text-left 
                animate-fadeInUp
                opacity-0
                animation-delay
                hover:scale-[1.02] transition-all duration-300
              "
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon / Illustration */}
              <img
                src={item.img}
                alt={item.title}
                className="w-42 h-42 object-contain mb-6 transition-all duration-300 group-hover:scale-110"
              />

              {/* Title */}
              <H3 className="mb-3">
                {item.title}
              </H3>

              {/* Description */}
              <P className=" max-w-sm leading-relaxed">
                {item.desc}
              </P>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in Up Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease-out forwards;
        }
      `}</style>
    </section>
  );
}