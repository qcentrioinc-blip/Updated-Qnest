import { useEffect, useRef, useState } from "react";
import { H2, H4 } from "../../../styles/Typography";
export default function Highlights() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);
 
  useEffect(() => {
    const trigger = () => setGo(true);
 
    const targets = [desktopRef.current, mobileRef.current].filter(Boolean);
 
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          trigger();
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
 
    targets.forEach((el) => obs.observe(el!));
    return () => obs.disconnect();
  }, []);
 
  const ease = "cubic-bezier(0.34, 1.4, 0.64, 1)";
 
  const mobileItems = [
    {
      bg: "#00E79C",
      textColor: "text-black",
      circle: "Conforms with BASEL regulatory recommendations",
      pill: "Provides liquidity and interest rate tools",
    },
    {
      bg: "#09A673",
      textColor: "text-white",
      circle: "Fully multi-currency compliant across modules",
      pill: "Simulates stress scenarios for risk assessment",
    },
    {
      bg: "#00AA72",
      textColor: "text-white",
      circle: "Integrates data from CBS and treasury systems",
      pill: "Supports strategic planning and budgeting needs",
    },
  ];
 
  return (
    <div className="w-full pt-10 relative bg-[#EEF3FA] dark:bg-black  flex flex-col items-center overflow-hidden">
       
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#00AA72 3px, transparent 3px)",
          backgroundSize: "24px 24px",
        }}
      />
      <H2 className="text-center dark:text-[#00AA72] px-4 xl:px-0 mb-16 max-w-2xl">  
    Key Highlights – FFIEC, OCC, and Federal Reserve Aligned
      </H2>
 
      {/* ── MOBILE / TABLET layout ── */}
      <div
        ref={mobileRef}
        className="flex xl:hidden flex-col items-center gap-6 w-full max-w-md px-4 pb-16"
      >
        {mobileItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 w-full"
            style={{
              opacity: go ? 1 : 0,
              transform: go ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.5s ease ${i * 200}ms, transform 0.5s ease ${i * 200}ms`,
            }}
          >
            <div
              className={`w-full rounded-3xl border-4 border-dashed border-black py-8 px-8 text-center font-quadran   text-[18px] font-semibold ${item.textColor}`}
              style={{ background: item.bg }}
            >
              {item.circle}
            </div>
            <div className="bg-[#363636] text-white font-quicksand text-[16px] font-semibold rounded-full py-3 px-8 text-center w-full">
              {item.pill}
            </div>
          </div>
        ))}
      </div>
 
      {/* ── DESKTOP Venn scene ── */}
     {/* ── DESKTOP Venn scene ── */}
<div
  ref={desktopRef}
  className="relative hidden xl:flex justify-center"
  style={{ width: "100%", marginBottom: 200 }}
>
  {/* Inner container — sized to fit all 3 circles */}
  <div className="relative" style={{ width: 740, height: 560 }}>
 
    {/* TOP circle — centered horizontally */}
    <div
      className="absolute rounded-full border-4 border-dashed border-black flex items-center justify-center text-center px-12"
      style={{
        width: 350, height: 350,
        background: "#00E79C",
        top: 0, left: 170,   // (740 - 400) / 2 = 170 → perfectly centered
        transform: go ? "translateX(0)" : "translateX(-500px)",
        opacity: go ? 1 : 0,
        transition: `transform 1s ${ease} 0ms, opacity 0.6s ease 0ms`,
      }}
    >
      <H4 className="leading-normal">
        Conforms with BASEL regulatory recommendations
      </H4>
    </div>
 
    {/* LEFT circle */}
    <div
      className="absolute rounded-full border-4 border-dashed border-black flex items-center justify-center text-center px-12"
      style={{
        width: 350, height: 350,
        background: "#09A673",
        top: 260, left: 10,
        transform: go ? "translateY(0)" : "translateY(400px)",
        opacity: go ? 1 : 0,
        transition: `transform 1s ${ease} 200ms, opacity 0.6s ease 200ms`,
      }}
    >
      <H4 className="leading-normal">
        Fully multi-currency compliant across modules
      </H4>
    </div>
 
    {/* RIGHT circle */}
    <div
      className="absolute rounded-full border-4 border-dashed border-black flex items-center justify-center text-center px-12"
      style={{
        width: 350, height: 350,
        background: "#00AA72",
        top: 260, left: 320,   // 740 - 400 = 340 → right-aligned within container
        transform: go ? "translateY(0)" : "translateY(400px)",
        opacity: go ? 1 : 0,
        transition: `transform 1s ${ease} 350ms, opacity 0.6s ease 350ms`,
      }}
    >
      <H4 className="leading-normal">
        Integrates data from CBS and treasury systems
      </H4>
    </div>
 
    {/* Center icon — sits at intersection of all 3 */}
    <div
      className="absolute rounded-full bg-white flex items-center justify-center"
      style={{
        width: 100, height: 100,
        top: 270, left: 280,   // (740/2) - 75 = 295
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        zIndex: 30,
        transform: go ? "scale(1)" : "scale(0.4)",
        opacity: go ? 1 : 0,
        transition: `transform 0.5s ${ease} 1100ms, opacity 0.4s ease 1100ms`,
      }}
    >
      <img src="/AML/AMLVector.svg" className="w-12 h-12" alt="aml" />
    </div>
 
    {/* LEFT pill — beside left circle */}
    <div
      className="absolute bg-[#363636] font-quicksand text-[18px]   text-white rounded-full py-2 px-8 font-semibold text-center"
      style={{
        top: 250, left: -70, width: 340, zIndex: 40,
        transform: go ? "scale(1)" : "scale(0.8)",
        opacity: go ? 1 : 0,
        transition: `transform 0.45s ${ease} 1300ms, opacity 0.4s ease 1300ms`,
      }}
    >
      Provides liquidity and interest rate tools
    </div>
 
    {/* RIGHT pill — beside right circle */}
    <div
      className="absolute bg-[#363636] font-quicksand text-[18px]   text-white rounded-full py-2 px-8 font-semibold text-center"
      style={{
        top: 250, right:-40, width: 340, zIndex: 40,
        transform: go ? "scale(1)" : "scale(0.8)",
        opacity: go ? 1 : 0,
        transition: `transform 0.45s ${ease} 1450ms, opacity 0.4s ease 1450ms`,
      }}
    >
      Simulates stress scenarios for risk assessment
    </div>
 
    {/* BOTTOM pill — below center */}
    <div
      className="absolute bg-[#363636] font-quicksand text-[18px] xl:text-[20px] text-white rounded-full py-2 px-8 font-semibold text-center"
      style={{
        top: 550, left: "50%", width: 410, zIndex: 40,
        transform: go ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0.8)",
        opacity: go ? 1 : 0,
        transition: `transform 0.45s ${ease} 1600ms, opacity 0.4s ease 1600ms`,
      }}
    >
      Supports strategic planning and budgeting needs
    </div>
 
  </div>
</div>
 
    </div>
  );
}