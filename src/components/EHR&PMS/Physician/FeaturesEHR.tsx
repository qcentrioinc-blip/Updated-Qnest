import { useState, useEffect, useRef } from "react";
import { H2,  H4, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";

type FeatureItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type FeaturesEHRProps = {
  content: {
    cardTitle: string;
    cardDescription: string;
    heading: string;
    features: FeatureItem[];
  };
};

// Animated vertical divider — draws downward on scroll trigger
const VerticalDivider = ({ animate, delay = 0 }: { animate: boolean; delay?: number }) => (
  <div className="hidden lg:flex items-stretch justify-center w-[2px] flex-shrink-0">
    <div
      className="w-[2px] bg-[#00AA72] origin-top"
      style={{
        height: animate ? "100%" : "0%",
        transition: animate
          ? `height 0.85s cubic-bezier(0.4,0,0.2,1) ${delay}ms`
          : "none",
      }}
    />
  </div>
);

const FeaturesEHR = ({ content }: FeaturesEHRProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [linesVisible, setLinesVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Trigger once when the features grid enters the viewport
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLinesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen md:min-h-fit dark:bg-[#042F2E] lg:min-h-fit bg-white py-10 ">
      <div className="px-[40px] md:px-[60px] xl:px-[160px] lg:mx-auto">
        <div className="rounded-3xl">

          {/* Top Heading Section - Left Aligned */}
          <div className="w-full text-left mb-12">
            <H2 className="text-black dark:text-amber-400 font-bold uppercase tracking-wide leading-tight whitespace-pre-line">
              {content.heading}
            </H2>
          </div>

          {/* Features Grid — with animated vertical dividers */}
          <div
            ref={gridRef}
            className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch gap-6 lg:gap-0"
          >
            {content.features.map((feature, index) => (
              <div key={feature.id} className="flex flex-row flex-1 lg:items-stretch">
                {/* Divider BEFORE each column except the first */}
                {index > 0 && (
                  <VerticalDivider
                    animate={linesVisible}
                    delay={(index - 1) * 180} // stagger: 0ms, 180ms, 360ms
                  />
                )}

                <div className="flex flex-col flex-1 lg:px-6 first:pl-0 last:pr-0">
                  <img
                    className="w-10 h-10 overflow-visible my-8"
                    src={feature.image}
                    alt={feature.title}
                  />
                  <H4 className="mb-2 dark:text-white font-semibold text-lg text-[#2A2A2A]">{feature.title}</H4>
                  <P className="text-sm leading-relaxed text-[#141414] opacity-90">{feature.description}</P>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default FeaturesEHR;