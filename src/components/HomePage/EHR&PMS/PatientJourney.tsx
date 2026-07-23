import { useEffect, useRef, useState } from "react";
import { H2, P } from "../../../styles/Typography";
 
const steps = [
  "Patient Registration",
  "Appointment Scheduling",
  "Check‑in, Self Check‑in and Triage",
  "Medical History, Allergies and Vitals",
  "Assessments, Progress Notes, E‑Rx and Labs",
  "Billing and Claims",
  "Patient Portal and Patient App",
  "HIPAA and Data Security",
  "Customizations and Integrations",
  "Analytics and Reports",
];
 
export default function PatientJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.02);
const stepThresholds = [
  0.0, // 1
  0.10, // 2s
  0.20, // 3
  0.30, // 4
  0.38, // 5
  0.55, // 6
  0.62, // 7
  0.70, // 8
  0.75, // 9
  0.86, // 10
];
 
// const isActive = scrollProgress >= stepThresholds[index];
 
const [isDark, setIsDark] = useState(false);

useEffect(() => {
  const checkDark = () => {
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  checkDark();

  const observer = new MutationObserver(checkDark);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}, []);


  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
     
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
     
      const scrolled = -rect.top;
      const totalScrollDistance = sectionHeight - viewportHeight;
      const progress = Math.min(Math.max(scrolled / totalScrollDistance, 0), 1);
     
      setScrollProgress(progress);
    };
 
    window.addEventListener("scroll", handleScroll);
    handleScroll();
   
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  // const currentStep = scrollProgress * 10;
  const strokeSpeed = 1.2;  
const strokeProgress = Math.max(
  Math.min(scrollProgress * strokeSpeed, 1),
  0.04
);
 
 
 
  return (
    <>
   <section
  ref={sectionRef}
  className="relative hidden lg:block dark:bg-[#042F2E] bg-white z-30"
  style={{ height: "420vh" }}
>

      <div className="sticky top-20 h-[100vh] flex flex-col items-center overflow-hidden z-30 border-l-[30px] dark:bg-[#042F2E] border-[#00AA72] bg-white">
        {/* Header - Fixed at top with spacing */}
        <div className="w-full pt-12   flex-shrink-0">
          <H2 className=" text-[#00AA72] text-center px-4 leading-tight">
            End to End Patient Journey,<br />Unified in One Platform
          </H2>
        </div>
 
        {/* Journey Path - Takes middle space with MORE VERTICAL GAP */}
        <div className="w-full flex-shrink-0  ">
          <div className="relative w-full max-w-8xl  px-4">
            <svg
              viewBox="0 0 1200 450"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background Path - INCREASED VERTICAL GAP */}
              <path
d="
M 0 100
L 960 100
Q 1120 100 1120 200
Q 1120 300 960 300
L 250 300
"
 
  stroke="#D1D5DB"
  strokeWidth="1"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
 
 
             
              />
 
              {/* Yellow Progress Path - INCREASED VERTICAL GAP */}
              <path
             d="
M 0 100
L 960 100
Q 1120 100 1120 200
Q 1120 300 960 300
L 250 300
"
 
                stroke={isDark ? "#FFFFFF" : "#141414"}
                strokeWidth="2"
                fill="none" 
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
                strokeDasharray="1"
               strokeDashoffset={1 - strokeProgress}
 
              />
 
              {/* Top Row Steps (1-5) */}
    {[0, 1, 2, 3, 4].map((index) => {
  const x = 80 + index * 220;
  const y = 100;
  const isActive = scrollProgress >= stepThresholds[index];
 
  return (
    <g key={index}>
      <circle
        cx={x}
        cy={y}
        r="14"
        fill={isActive ? "#008938" : "#FFFFFF"}
        stroke={isActive ? "#008938" : "#D1D5DB"}
        strokeWidth="2"
      />
 
      <text
        x={x}
        y={y + 6}
        textAnchor="middle"
        fontSize="16"
        fontFamily="'Quicksand', sans-serif"
        fontWeight="700"
        fill={isActive ? "#000" : "#9CA3AF"}
      >
        {index + 1}
      </text>
 
      {/* ✅ TEXT BELOW STEP */}
      <foreignObject
        x={x - 80}
        y={y + 30}
        width="180"
        height="80"
      >
        <div className="flex justify-center">
          <P
            className="text-center text-sm font-semibold leading-tight"
            style={{ color: isActive ? "#008938" : "#9CA3AF" }}
          >
            {steps[index]}
          </P>
        </div>
      </foreignObject>
    </g>
  );
})}
 
 
              {/* Bottom Row Steps (6-10) - Text BELOW circles like top row */}
       {[5, 6, 7, 8, 9].map((index) => {
  const reverseIndex = 9 - index;
  const x = 250 + reverseIndex * 180;
  const y = 300;
  const isActive = scrollProgress >= stepThresholds[index];
 
  return (
    <g key={index}>
      <circle
        cx={x}
        cy={y}
        r="16"
        fill={isActive ? "#008938" : "#FFFFFF"}
        stroke={isActive ? "#008938" : "#D1D5DB"}
        strokeWidth="2"
      />
 
      <text
        x={x}
        y={y + 6}
        textAnchor="middle"
        fontSize="16"
        fontFamily="'Quicksand', sans-serif"
        fontWeight="700"
        fill={isActive ? "#000" : "#9CA3AF"}
      >
        {index + 1}
      </text>
 
      {/* ✅ TEXT BELOW STEP */}
      <foreignObject
        x={x - 90}
        y={y + 30}
        width="180"
        height="80"
      >
        <div className="flex justify-center">
          <P
            className="text-center text-sm font-semibold leading-tight"
            style={{ color: isActive ? "#111827" : "#9CA3AF" }}
          >
            {steps[index]}
          </P>
        </div>
      </foreignObject>
    </g>
  );
})}
 
 
            </svg>
          </div>
        </div>
 
       
        {/* Bottom Image - Fixed at bottom of sticky container */}
     {/* <img
            src="/Physician/PatientJourney.webp"
            alt="Patient using laptop"
            className="w-full absolute -bottom-60 h-full   object-contain "
           
          /> */}
         
      </div>
     
       
    </section>
 
 
    <div className="lg:hidden bg-white px-[40px] md:[60px] py-6 lg:py-10">
  {/* Header */}
  <H2 className="text-2xl sm:text-3xl font-semibold text-teal-600 text-center mb-10  ">
    End to End Patient Journey,<br />Unified in One Platform
  </H2>
 
  {/* Steps */}
  <div className="max-w-xl mx-auto space-y-6">
    {steps.map((step, index) => (
      <div
        key={index}
        className="flex items-start gap-4 border border-gray-200 rounded-xl p-4"
      >
        <div className="w-10 h-10 rounded-full bg-[#00AA72] flex items-center justify-center font-bold">
          {index + 1}
        </div>
        <P className=" font-medium">
          {step}
        </P>
      </div>
    ))}
  </div>
 
  {/* Image */}
  {/* <div className=" ">
    <img
      src="/Physician/PatientJourney.webp"
      alt="Patient using laptop"
      className="w-full h-full object-cover rounded-xl"
    />
  </div> */}
</div>
 
    </>
  );
}
 